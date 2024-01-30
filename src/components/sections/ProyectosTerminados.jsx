import {
    abastoChico,
    cauce,
    juncal,
    latitud,
    lomasArana,
    orianas,
    losfresnos,
    lacampina,
    lasvictorias,
} from "../../../public/images/logos";
import style from "./ProyectosTerminados.module.scss";
import ProjectEnded from "../cards/ProjectEnded";

const ProyectosTerminados = () => {
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
                    <div className={style.container__title}>
                        <h1>Proyectos terminados</h1>
                    </div>
                </span>

                <div className={style.grid_container}>
                    <div className={style.grid_container__item}>
                        <ProjectEnded img={losfresnos} name='Arturo Seguí' description='Ubicado sobre las calles 412 bis y 179.' />
                    </div>
                    <div className={style.grid_container__item}>
                        <ProjectEnded img={lacampina} name='Etcheverry' description='Ubicado sobre las calles 229 entre 38 y 42.' />
                    </div>
                    <div className={style.grid_container__item}>
                        <ProjectEnded img={lasvictorias} name='Abasto' description='Ubicado sobre las calles 492 entre 202 y 208.' />
                    </div>

                    <div className={style.grid_container__item}>
                        <ProjectEnded img={latitud} name='Los Hornos' description='Ubicado sobre las calles 90 y 143.' />
                    </div>

                    <div className={style.grid_container__item}>
                        <ProjectEnded img={abastoChico} name='Abasto Chico' description='Ubicado sobre las calles 515 y 168.' />
                    </div>

                    <div className={style.grid_container__item}>
                        <ProjectEnded img={cauce} name='Abasto' description='Ubicado sobre las calles 498 y 200.' />
                    </div>

                    <div className={style.grid_container__item}>
                        <ProjectEnded img={lomasArana} name='Arana' description='Ubicado sobre las calles 30 y 630.' />
                    </div>

                    <div className={style.grid_container__item}>
                        <ProjectEnded img={juncal} name='Lisandro Olmos' description='Ubicado sobre las calles 179 y 37.' />
                    </div>

                    <div className={style.grid_container__item}>
                        <ProjectEnded img={orianas} name='Melchor Romero' description='Ubicado sobre las calles 515 y 168.' />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProyectosTerminados;
