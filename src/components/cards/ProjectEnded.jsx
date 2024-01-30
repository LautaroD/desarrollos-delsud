import Image from "next/image";
import style from "./ProjectEnded.module.scss";

const ProjectEnded = ({ img, name, description }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.wrapper__image}>
                <Image src={img} alt={name} />
            </div>
            <div className={style.wrapper__content}>
                <h4 className={style.wrapper__content__name_desarrollo}>{name}</h4>
                <p className={style.wrapper__content__description_desarrollo}>{description}</p>
            </div>
        </div>
    );
};

export default ProjectEnded;
