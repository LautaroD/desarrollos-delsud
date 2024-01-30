"use client";

import style from "./Slider.module.scss";
import { useWindowSize } from "@/utils/hooks";
import { SliderContainer } from "./SliderContainer";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import {
    home01_desktop,
    home02_desktop,
    home03_desktop,
    home04_desktop,
    home01,
    home02,
    home03,
    home04,
} from "../../../public/images/home";

export const Slider = () => {
    const size = useWindowSize();

    return (
        <>
            <Splide className={style.slider_desktop} options={{ type: "loop" }} hasTrack={false}>
                <SplideTrack>
                    <SplideSlide>
                        <SliderContainer
                            title='Obras.'
                            imageSrc={size.width === 0 ? home02_desktop : size.width > 650 ? home02_desktop : home02}
                        >
                            <span>
                                Trabajamos con maquinaria y mano de obra propias <b>optimizando</b> tiempos y costos.
                            </span>
                        </SliderContainer>
                    </SplideSlide>
                    <SplideSlide>
                        <SliderContainer title='Somos propietarios.' imageSrc={size.width > 650 ? home03_desktop : home03}>
                            <span>
                                Contamos con la <b>titularidad</b> de todos los terrenos. Esto <b>facilita</b> el proceso de adquisición{" "}
                                <b>evitando</b> trabas burocráticas.
                            </span>
                        </SliderContainer>
                    </SplideSlide>
                    <SplideSlide>
                        <SliderContainer title='Equipo completo.' imageSrc={size.width > 650 ? home01_desktop : home01}>
                            <span>
                                Conformamos un equipo <b>integral</b> de profesionales
                                <b>simplificando</b> el proceso de compra del terreno.
                            </span>
                        </SliderContainer>
                    </SplideSlide>
                    <SplideSlide>
                        <SliderContainer title='Formas de pago.' imageSrc={size.width > 650 ? home04_desktop : home04}>
                            <span>
                                Financiamos tu lote de forma personalizada sólo con tu <b>DNI</b> entregá tu <b>vehículo</b> al mejor valor
                                del mercado.
                            </span>
                        </SliderContainer>
                    </SplideSlide>
                </SplideTrack>
                <div className='splide__arrows' style={{ userSelect: "none" }}>
                    <button className='splide__arrow splide__arrow--prev'>
                        <p>Anterior</p>
                    </button>
                    <button className='splide__arrow splide__arrow--next'>
                        <p>Siguiente</p>
                    </button>
                </div>
            </Splide>
        </>
    );
};
