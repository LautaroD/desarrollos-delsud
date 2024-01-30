import style from "./Tooltip.module.scss";

const Tooltip = ({ children, name }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.tooltip}>
                {children}
                <span className={style.tiptext}>{name}</span>
            </div>
        </div>
    );
};

export default Tooltip;
