"use client";
import { web } from "@/constants/web";
import { gtagReportConversion } from "@/utils/report";
import { useEffect } from "react";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
export const Chat = () => {

  const sendText = "Gönder"

  useEffect(() => {

    const handleButtonClick = () => {
      gtagReportConversion();
    };

    const buttons = document.querySelectorAll('div > input + button');

    const buttonArray = Array.from(buttons);
    const selectedButton = buttonArray.find((btn) => btn.textContent?.trim() === sendText);

    if (selectedButton) {
      selectedButton.addEventListener('click', handleButtonClick);
    }

    return () => {
      if (selectedButton) {
        selectedButton.removeEventListener('click', handleButtonClick);
      }
    };
  }, []);

  return (
    <WhatsAppWidget
      phoneNumber={web.phone.replace("+", "")}
      companyName={web.name + " Destek"}
      //   replyTimeText="En kısa zamanda size geri dönüş yapıcağız."
      replyTimeText=""
      message={`Doruk Akademi'ye hoşgeldiniz. \n\nSize nasıl yardımcı olabiliriz ?`}
      sendButtonText={sendText}
      inputPlaceHolder="Mesajınızı yazın"
    />
  );
};
