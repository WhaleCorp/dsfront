export function request(route, method, body, token = " ") {
    let url = "https://localhost:7296/" + route;
    let obj = {
        method: method,
        headers: {},
        mode:"cors"
    }

    if (token !== " ") {
        obj.headers["Authorization"] = token
    }

    if (method === "PUT" || method === "POST") {
        obj["body"] = JSON.stringify(body)
        obj.headers['Content-Type'] = 'application/json'
        obj.headers['Accept']='application/json'
        console.log(obj.body)
    }

    // if (method === "GET" && body !== null)
    //     for (let i = 0; i < atribute.length; i++)
    //         if (i === 0)
    //             url += "?" + atribute[i] + "=" + body[i]
    //         else
    //             url += "&" + atribute[i] + "=" + body[i]

    try {
        return fetch(url, obj)
            .then((response) => { return response })
    } catch (error) {
        console.log(error)
        alert("Connection error \nTry later")
    }
}


