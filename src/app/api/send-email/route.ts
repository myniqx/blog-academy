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

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const formatMessage = (value: string) =>
  escapeHtml(value).replace(/\r?\n/g, "<br />");

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

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email || "Belirtilmedi");
  const safePhone = escapeHtml(phone);
  const safeMessage = formatMessage(message || "Mesaj bırakılmadı.");
  const subjectName = name.replace(/[\r\n]+/g, " ").trim();

  const mailOptions: CreateEmailOptions = {
    from: "Doruk Akademi <sandbox@resend.dev>",
    to: "atlasakademik@gmail.com", // || process.env.EMAIL_ADDR,
    subject: `Yeni başvuru: ${subjectName}`,
    text: `Adı: ${name}\nE-posta adresi: ${email}\nTelefon numarası: ${phone}\nMesaj: ${message}`,
    html: `
      <!doctype html>
      <html lang="tr">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Yeni iletişim başvurusu</title>
        </head>
        <body style="margin:0; padding:0; background-color:#f4f4f6; color:#1f2026; font-family:Arial, Helvetica, sans-serif;">
          <div style="display:none; max-height:0; overflow:hidden; opacity:0; color:transparent;">
            ${safeName} tarafından yeni bir iletişim başvurusu gönderildi.
          </div>

          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%; background-color:#f4f4f6;">
            <tr>
              <td align="center" style="padding:32px 12px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%; max-width:640px; background-color:#ffffff; border:1px solid #e3e4e8; border-radius:16px; overflow:hidden;">
                  <tr>
                    <td style="padding:28px 32px; background-color:#30313a; color:#ffffff;">
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td width="52" valign="middle">
                            <div style="width:44px; height:44px; line-height:44px; text-align:center; border-radius:12px; background-color:#ffffff; color:#30313a; font-size:16px; font-weight:700;">DA</div>
                          </td>
                          <td valign="middle" style="padding-left:12px;">
                            <div style="font-size:22px; line-height:28px; font-weight:700;">Doruk Akademi</div>
                            <div style="margin-top:3px; color:#d8d9df; font-size:13px; line-height:18px;">Yeni iletişim başvurusu</div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:32px;">
                      <div style="display:inline-block; margin-bottom:22px; padding:7px 12px; border-radius:999px; background-color:#eef0ff; color:#393a44; font-size:12px; line-height:16px; font-weight:700; letter-spacing:0.4px;">YENİ BAŞVURU</div>

                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%; border-collapse:collapse;">
                        <tr>
                          <td style="width:120px; padding:11px 0; border-bottom:1px solid #ececf0; color:#6b6d76; font-size:14px;">Adı</td>
                          <td style="padding:11px 0; border-bottom:1px solid #ececf0; color:#1f2026; font-size:15px; font-weight:600;">${safeName}</td>
                        </tr>
                        <tr>
                          <td style="width:120px; padding:11px 0; border-bottom:1px solid #ececf0; color:#6b6d76; font-size:14px;">E-posta</td>
                          <td style="padding:11px 0; border-bottom:1px solid #ececf0; color:#1f2026; font-size:15px; font-weight:600;">${safeEmail}</td>
                        </tr>
                        <tr>
                          <td style="width:120px; padding:11px 0; color:#6b6d76; font-size:14px;">Telefon</td>
                          <td style="padding:11px 0; color:#1f2026; font-size:15px; font-weight:600;">${safePhone}</td>
                        </tr>
                      </table>

                      <div style="margin-top:26px; color:#393a44; font-size:13px; line-height:18px; font-weight:700; letter-spacing:0.3px;">MESAJ</div>
                      <div style="margin-top:9px; padding:18px 20px; border-left:4px solid #393a44; border-radius:8px; background-color:#f6f6f8; color:#30313a; font-size:15px; line-height:24px; overflow-wrap:anywhere;">${safeMessage}</div>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:18px 32px; background-color:#f8f8fa; border-top:1px solid #ececf0; color:#7b7d86; font-size:12px; line-height:18px; text-align:center;">
                      Bu bildirim Doruk Akademi iletişim formu üzerinden gönderildi.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
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
