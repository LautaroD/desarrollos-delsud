import React from "react";
import style from "./ButtonContact.module.scss";
import { neueHassDisplay } from "@/app/layout";

export const ButtonContact = () => {
    return (
        <a
            href='https://api.whatsapp.com/send?phone=+2215079256&text=%C2%A1Hola,%20Desarrollos%20Delsud!%20Quiero%20recibir%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20terrenos'
            target='_blank'
            rel='noreferrer'
        >
            <div className={style.wrapper}>
                <button className={`${style.button_contacto} ${neueHassDisplay.className}`}>Contactate con un asesor</button>
            </div>
        </a>
    );
};
