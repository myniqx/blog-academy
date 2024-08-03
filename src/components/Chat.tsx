"use client";
import { web } from "@/constants/web";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
export const Chat = () => {
  return (
    <WhatsAppWidget
      phoneNumber={web.phone.replace("+", "")}
      companyName={web.name + " Destek"}
      //   replyTimeText="En kısa zamanda size geri dönüş yapıcağız."
      replyTimeText=""
      message={`Doruk Akademi'ye hoşgeldiniz. \n\nSize nasıl yardımcı olabiliriz ?`}
      sendButtonText="Gönder"
      inputPlaceHolder="Mesajınızı yazın"
    />
  );
};
