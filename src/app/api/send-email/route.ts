import { web } from "@/constants/web";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY as string,
});

const transporter = nodemailer.createTransport({
  service: "Gmail", // veya başka bir e-posta servisi kullanabilirsin
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/*
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'melyssa.dooley93@ethereal.email',
    pass: 'yMpsxyNSHejwts4aAd'
  }
})
*/
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
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "E-posta gönderilemedi" },
      { status: 500 }
    );
  }

  /*
    try {
      await mg.messages.create(process.env.MAILGUN_DOMAIN as string, mailOptions)
      return NextResponse.json({ message: 'E-posta başarıyla gönderildi' }, { status: 200 })
    } catch (error) {
      console.error(error)
      return NextResponse.json({ error: 'E-posta gönderilemedi' }, { status: 500 })
    } */
}
