import { useState } from "react"
export default function Header({id,removable=true}) {
    const [header, setHeader] = useState("TableHeader")

    function removeHeader(e) {
        e.preventDefault()
        console.log(id)
        document.getElementById(id).remove()
    }

    return (
        <div id={id} className="flex justify-around w-full">
            <input type="text" value={header} className="w-full text-center text-xl bg-inherit" onChange={(e) => setHeader(e.target.value)} />
            {removable?<button className="right-0" onClick={removeHeader}>X</button>:null}
        </div>
    )
}