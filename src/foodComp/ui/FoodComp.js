import style from "./FoodComp.module.css"
import {CreateFoodRecord, DeleteFoodRecord, GetAllFood} from "../api/Request";
import {useEffect, useState} from "react";
import {ButtonComp} from "../../shared/ButtonComp/ButtonComp";
import {InputTextComp} from "../../shared/InputTextComp/InputTextComp";
export const FoodComp = () => {
    const [data, setData] = useState([])

    const [name, setName] = useState("")
    const [cost, setCost] = useState(undefined)

    const refreshData = () => {
        GetAllFood(setData)
    }

    useEffect(() => {
        refreshData()
    }, [])

    return <div className={style.wrapper}>
        <div className={style.buttonGroup}>
            <InputTextComp
                placeholder={"name"}
                defaultText={name}
                onChange={(e) => setName(e.target.value)}
            />
            <InputTextComp
                placeholder={"cost"}
                defaultText={cost}
                onChange={(e) => setCost(e.target.value)}
            />
            <div className={style.acceptButton}>
                <ButtonComp
                    text={"add"}
                    onClick={()=> {
                        CreateFoodRecord(name, cost)
                        setName("")
                        setCost(undefined)
                    }}
                />
            </div>
        </div>
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <div className={style.showData}>
                        <InputTextComp
                            defaultText={item.name}
                        />
                        <InputTextComp
                            defaultText={item.cost}
                        />
                        <ButtonComp
                            text={"delete"}
                            onClick={()=> {
                                DeleteFoodRecord(item.id, refreshData)
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
}