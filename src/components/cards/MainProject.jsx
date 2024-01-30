"use client";

import Image from "next/image";
import style from "./MainProject.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { ButtonConsultar } from "../button";
import { useWindowSize } from "@/utils/hooks";
import Tooltip from "../tooltip/Tooltip";

const MainProject = ({ name, description, href, images = [], services = [], link }) => {
    const size = useWindowSize();

    return (
        <div className={style.wrapper}>
            <Splide className='normal_slider'>
                {size.width === 0 ? (
                    <Image
                        style={{ objectFit: "cover" }}
                        //fill={true}
                        className={style.image_slider_project}
                        priority={true}
                        quality={100}
                        placeholder='blur'
                        src={images.mobile[0]}
                        alt='Loading'
                    />
                ) : size.width > 750 ? (
                    images.desktop.map((e, i) => (
                        <SplideSlide key={i}>
                            <Image
                                style={{ objectFit: "cover" }}
                                //fill={true}
                                className={style.image_slider_project}
                                priority={true}
                                quality={100}
                                placeholder='blur'
                                src={e}
                                alt={`${name}_${i}`}
                            />
                        </SplideSlide>
                    ))
                ) : (
                    images.mobile.map((e, i) => (
                        <SplideSlide key={i}>
                            <Image
                                style={{ objectFit: "cover" }}
                                //fill={true}
                                className={style.image_slider_project}
                                priority={true}
                                quality={100}
                                placeholder='blur'
                                src={e}
                                alt={`${name}_${i}`}
                            />
                        </SplideSlide>
                    ))
                )}
            </Splide>
            {size.width === 0 ? null : size.width > 750 ? (
                <div className={style.wrapper__content}>
                    <h2 className={style.wrapper__content__title}>{name}</h2>

                    <div className={style.wrapper__content__actions}>
                        <p>{description}</p>

                        <div className={style.wrapper__content__actions__2nd}>
                            <div className={style.wrapper__content__actions__2nd__services}>
                                <span className={style.wrapper__content__actions__2nd__services__divider}></span>
                                <div className={style.container_project_bg__services}>
                                    {services.map((e, i) => (
                                        <Tooltip key={i} name={e.name}>
                                            <Image src={e.image} alt={`${name}_${i}`} />
                                        </Tooltip>
                                    ))}
                                </div>
                            </div>
                            <ButtonConsultar href={href} id_name={link} />
                        </div>
                    </div>
                </div>
            ) : (
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
                        <ButtonConsultar id_name={link} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainProject;
