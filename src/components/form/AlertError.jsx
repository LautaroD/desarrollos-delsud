import style from "./AlertError.module.scss";

const AlertError = () => {
    return (
        <div className={style.wrapper}>
            <p>Ha habido un error, intentelo nuevamente.</p>
        </div>
    );
};

export default AlertError;
