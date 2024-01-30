import React from "react";
import { chevron } from "../../../public/images";
import Image from "next/image";
import style from "./ButtonConsultar.module.scss";

export const ButtonConsultar = ({ href = "", id_name }) => {
    return (
        <a href={href} target='_blank' rel='noreferrer' id={id_name}>
            <div id={id_name} className={style.button_consultar_wrapper}>
                Consultar <Image src={chevron} alt='Consultar' />
            </div>
        </a>
    );
};
