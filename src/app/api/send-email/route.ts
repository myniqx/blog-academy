import { web } from "@/constants/web";
import { NextRequest, NextResponse } from "next/server";


import { CreateEmailOptions, Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export async function POST(request: NextRequest) {
  const { name, email, phone, message } = await request.json();

  const mailOptions: CreateEmailOptions = {
    from: "Atlas Analiz <sandbox@resend.dev>",
    to: process.env.EMAIL_ADDR || "",
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
      { error: "E-posta gönderilemedi" },
      { status: 500 },
    );
  }
}
