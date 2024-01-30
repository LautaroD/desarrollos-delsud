import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import style from "./MenuMobile.module.scss";
import { logo_mobile_variant_2, logo_mobile } from "../../../public/images";
import { useScrollBlock } from "@/utils/hooks";

export const MenuMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [blockScroll, allowScroll] = useScrollBlock();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        window.scrollTo({ top, behavior: "smooth" });
    };

    const handleLogoClick = () => {
        setIsOpen(false);
        window.scrollTo({ top, behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) blockScroll();
        else allowScroll();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    return (
        <nav className={style.wrapper}>
            <Link href='/' onClick={handleLogoClick}>
                <Image src={logo_mobile} alt='Desarrollos Delsud' width={63} height={63} />
            </Link>
            <div>
                <input className={style.checkbox} type='checkbox' name='' id='' onChange={toggleMenu} checked={isOpen} />
                <div className={style.hamburger_lines}>
                    <span className={`${style.line} ${style.line1} ${isOpen ? style.open : ""}`}></span>
                    <span className={`${style.line} ${style.line2} ${isOpen ? style.open : ""}`}></span>
                    <span className={`${style.line} ${style.line3} ${isOpen ? style.open : ""}`}></span>
                </div>

                <div className={`${style.menu_items} ${isOpen ? style.open : ""}`}>
                    <ul>
                        <Link href='/' onClick={toggleMenu}>
                            <li>Inicio</li>
                        </Link>
                        <Link href='/nosotros' onClick={toggleMenu}>
                            <li>Nosotros</li>
                        </Link>
                        <Link href='/proyectos' onClick={toggleMenu}>
                            <li>Proyectos</li>
                        </Link>
                        <Link href='/contacto' onClick={toggleMenu}>
                            <li>Contacto</li>
                        </Link>
                    </ul>
                    <Link href='/' onClick={toggleMenu}>
                        <Image
                            className={style.menu_items__logo}
                            src={logo_mobile_variant_2}
                            alt='Desarollos Delsud'
                            width={100}
                            height={50}
                        />
                    </Link>
                </div>
            </div>
        </nav>
    );
};
