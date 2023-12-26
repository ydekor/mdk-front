import {sendDeleteMsg, sendGetMsg, sendPostMsg, sendPutMsg} from "../../shared/sendMsg";

export const CreateFoodRecord = (name, cost) => {
    sendPostMsg('http://localhost:9000/food',
        {
            name: name,
            cost: cost,
        },
        (response) => {
            console.log(response)
        }
    )
}

export const DeleteFoodRecord = (id, refreshData) => {
    sendDeleteMsg('http://localhost:9000/food/' + id,
        null,
        refreshData
    )
}

export const UpdateFoodRecord = (id, name, cost) => {
    sendPutMsg('http://localhost:9000/food',
        {
            id: id,
            name: name,
            cost: cost,
        },
        (response) => {
            console.log(response)
        }
    )
}

export const GetAllFood = (setDataHandler) => {
    sendGetMsg('http://localhost:9000/food',
        {},
        setDataHandler
    )
}