import { useState } from "react"
export default function Controller() {
    const[allCon,setAllCon] = useState()
    function enterFullScreen() {
        document.documentElement.requestFullscreen()
    }

    async function addContent() {
        fetch('https://localhost:7296/Controller/PostDataToDSPage', {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                guid: allCon[0],
                data: "test"
            }),
        }).then((response) => console.log(response.status))
    }

    async function getAllConnected() {
        fetch('https://localhost:7296/Connections/GetAllConnected')
            .then((response) => response.json())
            .then((json) => setAllCon(json))
    }
    return (
        <div>
            <button onClick={addContent}>Add Content</button>
            <button onClick={enterFullScreen}>Full Screen</button>
            <button onClick={getAllConnected}>Get All Connected</button>
        </div>
    )
}