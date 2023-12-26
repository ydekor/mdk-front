const sendRequest = (destination, method, bodyObj, successHandler) => {
    const requestOptions = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: method !== 'GET' ? JSON.stringify(bodyObj) : null,
    }

    fetch(destination, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status}`)
            }
            return response.json()
        })
        .then(data => {
            if (successHandler && typeof successHandler === 'function') {
                successHandler(data)
            }
        })
        .catch(error => {
            console.error('Error:', error)
        })
}

export const sendPostMsg = (destination, bodyObj, successHandler) => {
    sendRequest(destination, 'POST', bodyObj, successHandler)
}

export const sendDeleteMsg = (destination, bodyObj, successHandler) => {
    sendRequest(destination, 'DELETE', bodyObj, successHandler)
}

export const sendPutMsg = (destination, bodyObj, successHandler) => {
    sendRequest(destination, 'PUT', bodyObj, successHandler)
}

export const sendGetMsg = (destination, bodyObj, successHandler) => {
    sendRequest(destination, 'GET', bodyObj, successHandler)
}