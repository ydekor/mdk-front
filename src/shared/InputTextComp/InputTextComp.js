import style from "./InputTextComp.module.css"
import {useEffect, useState} from "react";

export const InputTextComp = ({
                                  type= "text",
                                  defaultText = "",
                                  placeholder = "",
                                  onChange = e => {},

}) => {
    const [text, setText] = useState(defaultText)

    useEffect(() => {
        setText(defaultText)
    },[defaultText])

    return <div className={style.wrapper}>
        <input className={style.input}
               type={type}
               onChange={(e)=> {
                   setText(e.target.value)
                   onChange(e)
               }}
               value={text}
               placeholder={placeholder}
        />
    </div>
}