import { getCookie } from "./Cookies";

export function request(route, method, body, atribute,auth="f") {
    let url = "https://localhost:7296/" + route;
    let obj = {
        method: method,
    }

    if(auth==="r")
        obj["Authorization"] = getCookie("token")

    if (method === "PUT" || method === "POST") {
        obj["body"] = JSON.stringify(body)
        obj["headers"] = { 'Content-Type': 'application/json', }
    }

    if (method === "GET" && body !== null)
        for (let i = 0; i < atribute.length; i++)
            url += "?" + atribute[i] + "=" + body[i]

    return fetch(url, obj)
        .then((response) => { return response })
}


