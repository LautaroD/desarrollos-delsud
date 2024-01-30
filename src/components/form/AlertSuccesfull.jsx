import Image from "next/image";
import style from "./AlertSuccesfull.module.scss";
import { email_sended } from "../../../public/images";

const AlertSuccesfull = () => {
    return (
        <div className={style.wrapper}>
            <Image src={email_sended} alt='Consulta enviada' />
            <p>¡Listo! Tu consulta se envió con éxito. Nos estaremos comunicando en la brevedad.</p>
        </div>
    );
};

export default AlertSuccesfull;
