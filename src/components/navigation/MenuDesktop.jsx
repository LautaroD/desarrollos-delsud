import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import style from "./MenuDesktop.module.scss";
import { logo_mobile } from "../../../public/images";

export const MenuDesktop = () => {
    const pathname = usePathname();

    return (
        <nav className={style.wrapper}>
            <Link href='/'>
                <Image src={logo_mobile} alt='Desarrollos Delsud' width={80} height={25} />
            </Link>
            <ul>
                <Link href='/'>
                    <li className={pathname === "/" ? style.active : ""}>Inicio</li>
                </Link>
                <Link href='/proyectos'>
                    <li className={pathname === "/proyectos" ? style.active : ""}>Proyectos</li>
                </Link>
                <Link href='/nosotros'>
                    <li className={pathname === "/nosotros" ? style.active : ""}>Nosotros</li>
                </Link>

                <Link href='/contacto'>
                    <li className={pathname === "/contacto" ? style.active : ""}>Contacto</li>
                </Link>
            </ul>
        </nav>
    );
};
