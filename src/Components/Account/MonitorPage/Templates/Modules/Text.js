import { useState } from "react"

export default function Text({ textValue }) {
    const [value, setValue] = useState("text")
    function onChange(e) {
        setValue(e)
        textValue(value)
    }
    return (
        <div id="MainText" className="flex justify-center">
            <input type="text" value={value} className="text-center bg-inherit text-amber-300" name="header" onChange={(e) => onChange(e.target.value)
            } />
        </div>
    )
}