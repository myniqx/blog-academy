import { NextRequest, NextResponse } from "next/server";

import { CreateEmailOptions, Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "fake_api");

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const disallowedRequestPatterns = [
  /\b(tezimi|makalemi|ödevimi|projemi|sınavımı)\s+(yaz|hazırla|yap|tamamla|çöz)/iu,
  /\b(tez|makale|ödev|proje)\s+(yazdır|hazırlat|yaptır)/iu,
  /\b(intihal|turnitin|benzerlik)\s+(düşür|azalt|kır|atlat)/iu,
  /\b(online\s+)?sınav(a|ı|ımı)?\s+(gir|çöz)/iu,
];

export async function POST(request: NextRequest) {
  const { name, email, phone, message }: FormData = await request.json();

  if (!name || !phone || typeof message !== "string" || message.length > 500) {
    return NextResponse.json(
      { error: "Başvuru bilgileri eksik veya geçersiz." },
      { status: 400 },
    );
  }

  if (
    disallowedRequestPatterns.some((pattern) => pattern.test(message || ""))
  ) {
    return NextResponse.json(
      {
        error:
          "Danışan veya öğrenci adına akademik çalışma hazırlama ya da bu tür hizmetlere aracılık etme talepleri kabul edilmemektedir.",
      },
      { status: 400 },
    );
  }

  const mailOptions: CreateEmailOptions = {
    from: "Doruk Akademi <sandbox@resend.dev>",
    to: "atlasakademik@gmail.com", // || process.env.EMAIL_ADDR,
    subject: `Yeni başvuru: ${name}`,
    text: `Adı: ${name}\nE-posta adresi: ${email}\nTelefon numarası: ${phone}\nMesaj: ${message}`,
  };

  try {
    const { data, error } = await resend.emails.send(mailOptions);
    if (error) throw new Error(error.message);
    return NextResponse.json(
      { message: "E-posta başarıyla gönderildi" },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "E-posta gönderilemedi :" + String(error) },
      { status: 500 },
    );
  }
}
