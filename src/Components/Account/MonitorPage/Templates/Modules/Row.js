import { useEffect, useState } from "react"

export default function Row({id,setRemoveRowId}) {
    const [title, setTitle] = useState("Title")
    const [description, setDescription] = useState("Description")

    function removeRow(e){
        e.preventDefault()
        setRemoveRowId(id)
    }

    return (
        <div className="flex justify-around w-full" >
            <input type="text" value={title} className="text-center bg-inherit text-amber-300 w-[45%]" name="header" onChange={(e) => setTitle(e.target.value)}  />
            <input type="text" value={description} className="text-center bg-inherit text-amber-300 w-[45%]" name="header" onChange={(e) => setDescription(e.target.value)} />
            <button className="right-0" onClick={removeRow}>X</button>
        </div>
    )
}