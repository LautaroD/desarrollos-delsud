"use client";

import Image from "next/image";
import style from "./Project.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { ButtonConsultar } from "../button";
import Tooltip from "../tooltip/Tooltip";
import { useWindowSize } from "@/utils/hooks";

const Project = ({ name, description, href, images = [], services = [], link = "" }) => {
    const size = useWindowSize();

    return (
        <div className={style.wrapper}>
            <Splide className='normal_slider'>
                {images.map((e, i) => (
                    <SplideSlide key={i} className={style.image_slider_project}>
                        <Image
                            style={{ objectFit: "cover" }}
                            className={style.image_slider_project}
                            priority={true}
                            quality={100}
                            placeholder='blur'
                            src={e}
                            alt={`${name}_${i}`}
                        />
                    </SplideSlide>
                ))}
            </Splide>
            <div className={style.wrapper__content}>
                <h2 className={style.wrapper__content__title}>{name}</h2>
                <p>{description}</p>

                <span className={style.wrapper__content__divider} />
                <div className={style.wrapper__content__actions}>
                    <div className={style.container_project_bg__services}>
                        {services.map((e, i) => (
                            <Tooltip key={i} name={e.name}>
                                <Image src={e.image} alt={`${name}_${i}`} />
                            </Tooltip>
                        ))}
                    </div>
                    <span className={style.wrapper__content__actions__btns}>
                        <ButtonConsultar href={href} id_name={link} />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Project;
