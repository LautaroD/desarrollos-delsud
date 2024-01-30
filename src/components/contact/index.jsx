"use client";

import Image from "next/image";
import { useState } from "react";
import style from "./page.module.scss";
import { Form } from "@/components/form";
import { location, arroba } from "../../../public/images";
import AlertSuccesfull from "@/components/form/AlertSuccesfull";
import AlertError from "@/components/form/AlertError";

export const metadata = {
    title: "Desarrollos Delsud | Contacto",
    description: "Desarrollos Delsud",
};

export default function SectionContacto() {
    const [open, setOpen] = useState(false);
    const [openError, setOpenError] = useState(false);

    return (
        <>
            <main className={style.wrapper}>
                <div className={style.background}>
                    <div className={style.box_1}></div>
                    <div className={style.box_2}></div>
                    <div className={style.box_3}></div>
                    <div className={style.box_6}></div>
                    <div className={style.box_5}></div>
                    <div className={style.box_4}></div>
                    <div className={style.box_7}></div>
                    <div className={style.box_8}></div>
                    <div className={style.box_9}></div>
                    <div className={style.box_10}></div>
                    <div className={style.box_11}></div>
                    <div className={style.box_12}></div>
                </div>

                <div className={style.container}>
                    <span className={style.container__wrapper}>
                        <div className={`${style.container__title} animate__animated animate__slideInLeft animate__delay-0s`}>
                            <h1>Contactanos</h1>
                        </div>
                        <div className={`${style.container__subTitle} animate__animated animate__zoomIn animate__delay-0s`}>
                            <p>Dejanos tu consulta.</p>
                            <p>¡También nos podés escribir por Whatsapp o enviarnos un mail!</p>
                        </div>
                    </span>

                    <span className={`${style.container__form} animate__animated animate__zoomIn animate__delay-1s`}>
                        <Form open={open} setOpen={setOpen} setOpenError={setOpenError} />
                    </span>

                    <span className={style.container__divisor} />

                    <div className={`${style.container__redes_sociales} animate__animated animate__zoomIn animate__delay-2s`}>
                        <a href='mailto:info@desarrollosdelsud.com.ar'>
                            <div
                                style={{ textUnderlineOffset: "auto", textDecoration: "underline" }}
                                className={style.container__redes_sociales__item}
                            >
                                <Image src={arroba} alt='Nuestro email' />
                                info@desarrollosdelsud.com.ar
                            </div>
                        </a>
                        <a
                            rel='noreferrer'
                            target='_blank'
                            href='https://www.google.com/maps/place/Desarrollos+Delsud/@-34.896114,-57.95352,19.75z/data=!4m6!3m5!1s0x95a2e7353e948d1b:0xd19aed8c2ce5caf6!8m2!3d-34.8958776!4d-57.953643!16s%2Fg%2F11jcldtd0r?entry=ttu'
                        >
                            <div className={style.container__redes_sociales__item}>
                                <Image src={location} alt='Nuestra ubicacion' />
                                Calle 37 N°125 entre 117 y 118
                            </div>
                        </a>
                    </div>
                </div>
            </main>
            {open ? (
                <span className='animate__animated animate__zoomIn animate__delay-0s'>
                    <AlertSuccesfull />
                </span>
            ) : null}
            {openError ? (
                <span className='animate__animated animate__zoomIn animate__delay-0s'>
                    <AlertError />
                </span>
            ) : null}
        </>
    );
}
