export function request(route, method, body, token = " ") {
    let url = "https://ds.kaykov.co/" + route;
    let obj = {
        method: method,
        headers: {
            'Access-Control-Allow-Origin': 'https://digitalsign.kaykov.co',
            'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
        },
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


