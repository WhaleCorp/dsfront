import { useState } from "react"

export default function Row({ id = 0o10 }) {
    const [title, setTitle] = useState("Title")
    const [description, setDescription] = useState("Description")

    function removeRow(e) {
        e.preventDefault()
        if (id !== 0o10)
            document.getElementById(id).remove()
    }

    return (
        <div id={id} className="flex justify-around w-full" >
            <input type="text" value={title} className="text-center bg-inherit w-[45%]" name="header" onChange={(e) => setTitle(e.target.value)} />
            <input type="text" value={description} className="text-center bg-inherit w-[45%]" name="header" onChange={(e) => setDescription(e.target.value)} />
            <button className="right-0" onClick={removeRow}>X</button>
        </div>
    )
}