"use client";

import { usePathname } from "next/navigation";
import style from "./Footer.module.scss";
import Image from "next/image";
import { logo_footer } from "../../../public/images";

export const Footer = () => {
    const path = usePathname();

    if (path === "/") return null;

    return (
        <div className={style.wrapper}>
            <a href='https://grupodelsud.com/' target='_blank' rel='noreferrer'>
                <div className={style.wrapper__logo}>
                    <Image src={logo_footer} alt='Una empresa de Delsud' width={370} height={30} />
                </div>
            </a>
            <div className={style.wrapper__derechos_reservados}>
                <p>© Desarrollos Delsud. Todos los derechos reservados.</p>
            </div>
        </div>
    );
};
