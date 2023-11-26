import { useState } from "react"
import useLongPress from "../../../../../Helpers/UseLongPress"
import { useStores } from "../../../../../Store/MainStore"

export default function Header({ id, removable = true }) {
    const [header, setHeader] = useState("TableHeader")
    const change = useLongPress({ onLongPress: (ev) => ChangerStore.setObject(ev.target.parentElement) })
    const { ChangerStore } = useStores()

    function removeHeader(e) {
        e.preventDefault()
        document.getElementById(id).remove()
    }

    return (
        <div id={id === undefined ? Math.random() * 10 : id} className="flex justify-around w-full" {...change}>
            <p className="w-full text-center bg-inherit">Table Header</p>
            {removable ? <button name="avoid" className="right-0" onClick={removeHeader}>X</button> : null}
        </div>
    )
}