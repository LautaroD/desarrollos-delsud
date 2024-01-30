import React from "react";
import Image from "next/image";
import style from "./MosaicoNosotros.module.scss";
import { home, diversity, handyman, ready } from "../../../public/images";

export const MosaicoNosotros = () => {
    return (
        <div className={style.wrapper}>
            <div
                style={{ backgroundColor: "#D2D4DC", color: "#003A70" }}
                className={`${style.wrapper__container_bg} animate__animated animate__zoomIn animate__delay-0s`}
            >
                <Image src={diversity} alt='svg' />
                <p>
                    <b>+1500</b> sueños cumplidos
                </p>
            </div>
            <div
                style={{ backgroundColor: "#D2D4DC", color: "#003A70" }}
                className={`${style.wrapper__container_md} animate__animated animate__zoomIn animate__delay-1s`}
            >
                <Image src={handyman} alt='svg' />
                <p>
                    <b>4</b> proyectos en ejecución
                </p>
            </div>
            <div
                style={{ backgroundColor: "#D2D4DC", color: "#003A70" }}
                className={`${style.wrapper__container_md} animate__animated animate__zoomIn animate__delay-2s`}
            >
                <Image src={ready} alt='svg' />
                <p>
                    <b>6</b> proyectos finalizados
                </p>
            </div>
            <div
                style={{ backgroundColor: "#003A70", color: "#D2D4DC" }}
                className={`${style.wrapper__container_bg} animate__animated animate__zoomIn animate__delay-3s`}
            >
                <Image src={home} alt='svg' />
                <p>
                    <b>+750.000</b>m² urbanizados
                </p>
            </div>
        </div>
    );
};
