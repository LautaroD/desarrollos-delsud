"use client";

import style from "./Navbar.module.scss";
import { MenuMobile } from "./MenuMobile";
import { MenuDesktop } from "./MenuDesktop";
import { useWindowSize } from "@/utils/hooks";

export const Navbar = () => {
    const size = useWindowSize();

    return (
        <nav className={style.wrapper}>
            <div className={style.wrapper__container}>{size.width === 0 ? null : size.width < 750 ? <MenuMobile /> : <MenuDesktop />}</div>
        </nav>
    );
};
