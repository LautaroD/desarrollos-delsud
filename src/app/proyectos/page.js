import style from "./page.module.scss";
import Project from "@/components/cards/Project";
import MainProject from "@/components/cards/MainProject";
import ProyectosTerminados from "@/components/sections/ProyectosTerminados";

import {
    garden01,
    garden02,
    garden03,
    garden04,
    garden05,
    garden_mb_01,
    garden_mb_02,
    garden_mb_03,
    garden_mb_04,
    garden_mb_05,
} from "../../../public/images/garden";

import { losHornos01, losHornos02, losHornos03, losHornos04 } from "../../../public/images/losHornos";
import { default as san_julian_01 } from "../../../public/images/sanjulian/san_julian_01.jpg";
import { default as sophenia_01 } from "../../../public/images/sophenia/sophenia_01.jpg";
import { sanjulian_logo_png, sophenia_logo_png } from "../../../public/images/logos";

import { luz, agua, calles_mejoradas, cerco_perimetral, porton_acceso } from "../../../public/images";

export const metadata = {
    title: "Desarrollos Delsud | Proyectos",
    description: "Venta de terrenos con escritura inmediata en la ciudad de La Plata. Conocé nuestros planes de financiación.",
};

export default function Proyectos() {
    return (
        <>
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
                        <div className={style.container__title}>
                            <h1 className='animate__animated animate__slideInLeft animate__delay-0s'>Proyectos</h1>
                        </div>
                    </span>

                    <div className={style.grid_container}>
                        <div className={`${style.grid_container__item} animate__animated animate__zoomIn animate__delay-0s`}>
                            <MainProject
                                name='Garden'
                                link='garden'
                                images={{
                                    mobile: [garden_mb_01, garden_mb_02, garden_mb_03, garden_mb_04, garden_mb_05],
                                    desktop: [garden01, garden02, garden03, garden04, garden05],
                                }}
                                description='Barrio privado ubicado en la localidad de Abasto sobre la R.P N°36'
                                services={[
                                    { name: "Luz", image: luz },
                                    { name: "Agua", image: agua },
                                    { name: "Cerco perimetral", image: cerco_perimetral },
                                ]}
                                href='https://api.whatsapp.com/send?phone=+542215079256&text=%C2%A1Buenos%20d%C3%ADas!%20%F0%9F%91%8B%20Quiero%20recibir%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20Garden'
                            />
                        </div>
                        <div className={`${style.grid_container__item} animate__animated animate__zoomIn animate__delay-1s`}>
                            <Project
                                name='La Escondida'
                                link='laescondida'
                                images={[losHornos01, losHornos02, losHornos03, losHornos04]}
                                description='Barrio semi-cerrado ubicado en Los Hornos, a 20 minutos de la ciudad de La Plata.'
                                services={[
                                    { name: "Luz", image: luz },
                                    { name: "Calles mejoradas", image: calles_mejoradas },
                                    { name: "Porton de acceso", image: porton_acceso },
                                    { name: "Cerco perimetral", image: cerco_perimetral },
                                ]}
                                href='https://api.whatsapp.com/send?phone=+542215079256&text=%C2%A1Hola!%20%F0%9F%91%8B%20Quiero%20recibir%20informaci%C3%B3n%20acerca%20de%20sus%20terrenos%20en%20Los%20Hornos'
                            />
                        </div>
                        <div className={`${style.grid_container__item} animate__animated animate__zoomIn animate__delay-2s`}>
                            <Project
                                name='Sophenia'
                                link='sophenia'
                                images={[sophenia_logo_png, sophenia_01]}
                                description='Ubicado en la localidad de Arana, a pocos metros de las avenidas 137 y 637. '
                                services={[
                                    { name: "Luz", image: luz },
                                    { name: "Calles mejoradas", image: calles_mejoradas },
                                    { name: "Porton de acceso", image: porton_acceso },
                                    { name: "Cerco perimetral", image: cerco_perimetral },
                                ]}
                                href='https://api.whatsapp.com/send?phone=+542215079256&text=%C2%A1Hola!%20%F0%9F%91%8B%20Quiero%20recibir%20informaci%C3%B3n%20acerca%20de%20sus%20terrenos%20en%20Arturo%20Segu%C3%AD'
                            />
                        </div>
                        <div className={`${style.grid_container__item} animate__animated animate__zoomIn animate__delay-3s`}>
                            <Project
                                name='San Julián'
                                link='sanjulian'
                                images={[sanjulian_logo_png, san_julian_01]}
                                description='Barrio abierto ubicado en la localidad de Arturo Seguí, a 5 minutos de la Ruta Provincial N°2.'
                                services={[
                                    { name: "Luz", image: luz },
                                    { name: "Calles mejoradas", image: calles_mejoradas },
                                ]}
                                href='https://api.whatsapp.com/send?phone=+542215079256&text=%C2%A1Hola!%20%F0%9F%91%8B%20Quiero%20recibir%20informaci%C3%B3n%20acerca%20de%20sus%20terrenos%20en%20Arturo%20Segu%C3%AD'
                            />
                        </div>
                        {/* <div className={`${style.grid_container__item} animate__animated animate__zoomIn animate__delay-1s`}>
                            <Project
                                name='Los Fresnos'
                                link='losfresnos'
                                images={[arturo01, arturo02, arturo03, arturo04]}
                                description='Barrio semi-cerrado ubicado en Arturo Seguí, cercal de Camino General Manuel Belgrano.'
                                services={[
                                    { name: "Luz", image: luz },
                                    { name: "Calles mejoradas", image: calles_mejoradas },
                                    { name: "Porton de acceso", image: porton_acceso },
                                    { name: "Cerco perimetral", image: cerco_perimetral },
                                ]}
                                href='https://api.whatsapp.com/send?phone=+542215079256&text=%C2%A1Hola!%20%F0%9F%91%8B%20Quiero%20recibir%20informaci%C3%B3n%20acerca%20de%20sus%20terrenos%20en%20Arturo%20Segu%C3%AD'
                            />
                        </div> */}

                        {/* <div className={`${style.grid_container__item} animate__animated animate__zoomIn animate__delay-3s`}>
                            <Project
                                name='Las Victorias'
                                link='lasvictorias'
                                images={[abasto01, abasto02, abasto03, abasto04]}
                                description='Barrio semi-cerrado ubicado en Abasto, conectado con la ciudad de La Plata a través de la Av.520 y la R.P N°36 '
                                services={[
                                    { name: "Luz", image: luz },
                                    { name: "Calles mejoradas", image: calles_mejoradas },
                                    { name: "Porton de acceso", image: porton_acceso },
                                    { name: "Cerco perimetral", image: cerco_perimetral },
                                ]}
                                href='https://api.whatsapp.com/send?phone=+542215079256&text=%C2%A1Hola!%20%F0%9F%91%8B%20Quiero%20recibir%20informaci%C3%B3n%20acerca%20de%20sus%20terrenos%20en%20Abasto'
                            />
                        </div> */}
                        {/* <div className={`${style.grid_container__item} animate__animated animate__zoomIn animate__delay-4s`}>
                            <Project
                                name='La Campiña'
                                link='lacampina'
                                images={[etcheverry01, etcheverry02, etcheverry03, etcheverry04]}
                                description='Ubicado en la localidad de Etcheverry, a minutos de las Rutas Provinciales N°2 y N°215.'
                                services={[
                                    { name: "Luz", image: luz },
                                    { name: "Agua", image: agua },
                                    { name: "Calles mejoradas", image: calles_mejoradas },
                                    { name: "Cerco perimetral", image: cerco_perimetral },
                                ]}
                                href='https://api.whatsapp.com/send?phone=+542215079256&text=%C2%A1Hola!%20%F0%9F%91%8B%20Quiero%20recibir%20informaci%C3%B3n%20acerca%20de%20sus%20terrenos%20en%20Etcheverry'
                            />
                        </div> */}
                    </div>
                </div>
            </main>
            <ProyectosTerminados />
        </>
    );
}
