import { useState } from "react"
export default function InputText({ id }) {
    const [value, setValue] = useState("text")
    function onChange(e) {
        setValue(e)
    }

    function removeText(e) {
        e.preventDefault()
        document.getElementById(id).remove()
    }

    return (
        <div id={id} className="flex w-full">
            <textarea type="text" value={value} className="text-center border-2 rounded-md bg-inherit w-full" onChange={(e) => onChange(e.target.value)
            } />
            <button name="avoid" className="absolute z-10" onClick={removeText}>X</button>
        </div>
    )
}