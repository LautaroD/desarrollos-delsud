import Image from "next/image";
import style from "./SliderContainer.module.scss";
import { ButtonContact } from "../button";
import { logo_facebook, logo_instagram, logo_linkedin } from "../../../public/images";

export const SliderContainer = ({ children, title, imageSrc }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.wrapper__background}>
                <Image
                    style={{ objectFit: "cover" }}
                    fill={true}
                    priority={true}
                    quality={100}
                    placeholder='blur'
                    src={imageSrc}
                    alt={title}
                />
            </div>
            <div className={style.wrapper__content}>
                <div className={style.wrapper__content__title_subtitle}>
                    <h2>{title}</h2>
                    {children}
                </div>
                <div className={style.wrapper__content__contact_button}>
                    <ButtonContact />
                </div>
                <div className={style.wrapper__content__redes_sociales}>
                    <a href='https://www.instagram.com/desarrollos.delsud/' target='_blank' rel='noreferrer'>
                        <Image src={logo_instagram} alt='Instagram' width={30} height={30} />
                    </a>
                    <a href='https://ar.linkedin.com/company/desarrollos-delsud' target='_blank' rel='noreferrer'>
                        <Image src={logo_linkedin} alt='Linkedin' width={44} height={30} />
                    </a>
                    <a href='https://www.facebook.com/DesarrollosDelsud.LaPlata/' target='_blank' rel='noreferrer'>
                        <Image src={logo_facebook} alt='Facebook' width={15} height={30} />
                    </a>
                </div>
            </div>
        </div>
    );
};
