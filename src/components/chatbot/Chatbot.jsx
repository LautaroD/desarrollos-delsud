"use client";

import $ from "jquery";
import { useState, useEffect } from "react";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import WhatsappButton from "../button/ButtonWhatsapp";
import ChatbotButton from "../button/ButtonChatbot";
import config from "./config";
import { usePathname } from "next/navigation";
import { useScrollToBottom } from "@/utils/hooks";
import gsap from "gsap";

import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

export default function ChatbotContainer() {
    const [open, setOpen] = useState(false);
    const [openChatbot, setOpenChatbot] = useState(true);
    const location = usePathname();
    const height = useScrollToBottom();

    const onClick = () => setOpen(!open);

    useEffect(() => {
        $(document).ready(function () {
            const chatButton = $(".react-chatbot-kit-chat-btn-send");
            const linkElement = $("<a>")
                .attr(
                    "href",
                    "https://api.whatsapp.com/send?phone=+542215079256&text=%C2%A1Hola,%20Desarrollos!%20%20Su%20chat%20me%20trajo%20hasta%20ac%C3%A1.%20Me%20gustar%C3%ADa%20contactarme%20con%20uno%20de%20sus%20asesores."
                )
                .attr("target", "_blank")
                .attr("rel", "noreferrer")
                .text("Contactar un asesor");

            chatButton.append(linkElement);
        });

        setTimeout(() => {
            if (window.innerWidth < 500) return;
            setOpen(true);
        }, 1500);
    }, []);

    const validator = (input) => {
        if (!input.replace(/\s/g, "").length) return false;
        if (input.length > 1) return true;
        return false;
    };

    useEffect(() => {
        if (height) setOpenChatbot(false);
        else setOpenChatbot(true);
    }, [height]);

    useEffect(() => {
        if (openChatbot) {
            gsap.to(".chatbot-container-gsap", { opacity: 1, x: "0%" });
        } else {
            gsap.to(".chatbot-container-gsap", { opacity: 0, x: "200%" });
        }
    }, [openChatbot]);

    return (
        <>
            {location === "/proyectos/laescondida" ? null : location === "/proyectos/losfresnos" ? null : location ===
              "/proyectos/lasvictorias" ? null : location === "/proyectos/lacampina" ? null : (
                <div
                    className={open ? "chatbot-wrapper chatbot-container-gsap" : "chatbot-wrapper-opened chatbot-container-gsap"}
                    style={location !== "/" ? { right: "4.3%" } : null}
                >
                    <WhatsappButton open={open} />

                    <ChatbotButton open={open} setOpen={setOpen} />
                    <Chatbot
                        config={config(onClick, open)}
                        messageParser={MessageParser}
                        actionProvider={ActionProvider}
                        validator={validator}
                        headerProps={{ open, setOpen }}
                        placeholderText='Escribe tu mensaje aquí.'
                    />
                </div>
            )}
        </>
    );
}
