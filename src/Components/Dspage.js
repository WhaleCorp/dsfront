import { useEffect } from "react"

export default function Dspage(){
    useEffect(()=>{
         let socket = new WebSocket("wss://localhost:7296/WebSoket/GetWS");
        socket.onopen = function (e) {
            alert("[open] Соединение установлено");
            alert("Отправляем данные на сервер");
            console.log(e)
            socket.send(",e,");
        };

        

        socket.onmessage = function (event) {
            console.log(event)
            alert(`[message] Данные получены с сервера: ${event.data}`);
        };
               

        socket.onclose = function (event) {
            console.log(event)
            if (event.wasClean) {
                alert(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
            } else {
                alert('[close] Соединение прервано');
            }
        };

        socket.onerror = function (error) {
            alert(error);
        };
    },[])
    return(
        <div>

        </div>
    )
}