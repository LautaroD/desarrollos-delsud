import style from "./page.module.scss";
import dynamic from "next/dynamic";

import { MosaicoNosotros } from "@/components/cards/MosaicoNosotros";

export const metadata = {
    title: "Desarrollos Delsud | Nosotros",
    description: "Venta de terrenos con escritura inmediata en la ciudad de La Plata. Conocé nuestros planes de financiación.",
};

export default function Nosotros() {
    return (
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
                        <h1>Nosotros</h1>
                    </div>
                </span>

                {/* <div className={style.container__gif}>
                    <span className={style.container__gif__img}>
                        <Gif />
                    </span>
                </div> */}

                <div className={style.container__mosaico}>
                    <MosaicoNosotros />
                </div>
            </div>
        </main>
    );
}
