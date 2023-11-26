import { useState } from "react"
import useLongPress from "../../../../../../Helpers/UseLongPress"
import { useStores } from "../../../../../../Store/MainStore"
export default function InputText({ id }) {
    const { ChangerStore } = useStores()
    const [value, setValue] = useState("text")
    const change = useLongPress({ onLongPress: (ev) => ChangerStore.setObject(ev.target.parentElement) })


    function onChange(e) {
        setValue(e)
    }

    function removeText(e) {
        e.preventDefault()
        document.getElementById(id).remove()
    }

    return (
        <div id={id} className="flex w-full rounded-md" {...change}>
            <textarea type="text" value={value} className="text-center border-2 rounded-md bg-inherit w-full" onChange={(e) => onChange(e.target.value)
            } />
            <button name="avoid" className="absolute z-10" onClick={removeText}>X</button>
        </div>
    )
}