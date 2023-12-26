import style from "./ButtonComp.module.css"
export const ButtonComp = ({
                               text,
                               onClick,
                               minWidth = null


}) => {
    const customStyle = !!minWidth ? {minWidth: minWidth} : {}

    return <div className={style.wrapper} style={customStyle}>
        <div className={style.contentContainer} onClick={onClick}>
            {text}
        </div>
    </div>
}