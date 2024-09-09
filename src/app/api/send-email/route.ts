import { web } from "@/constants/web";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail", // veya başka bir e-posta servisi kullanabilirsin
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export async function POST(request: NextRequest) {
  const { name, email, phone, message } = await request.json();

  const mailOptions = {
    from: web.name,
    to: process.env.EMAIL_ADDR,
    subject: `Yeni başvuru: ${name}`,
    text: `Adı: ${name}\nE-posta adresi: ${email}\nTelefon numarası: ${phone}\nMesaj: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
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
