"use client";

import Image from "next/image";
import style from "./ButtonWhatsapp.module.scss";
import { button_whatsapp } from "../../../public/images";
import { useWindowSize } from "@/utils/hooks";

const ButtonWhatsapp = ({ open }) => {
    const size = useWindowSize();

    if (open && size.width < 1390) return null;

    return (
        <>
            <div className={`${style.home} animate__animated animate__pulse animate__infinite`} id='whatsapp-conversion'>
                <a
                    rel='noreferrer'
                    target='_blank'
                    href='https://api.whatsapp.com/send?phone=+2215079256&text=%C2%A1Hola,%20Desarrollos%20Delsud!%20Quiero%20recibir%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20terrenos'
                >
                    <Image src={button_whatsapp} alt='Ir a whatsapp' width={61} height={61} />
                </a>
            </div>
        </>
    );
};

export default ButtonWhatsapp;
