import useLongPress from "../../../../../Helpers/UseLongPress"
import { useStores } from "../../../../../Store/MainStore"

export default function Row({ id = 0o10 }) {
    const change = useLongPress({ onLongPress: (ev) => ev.target.getAttribute("name")!=="row"?ChangerStore.setObject(ev.target.parentElement):null })
    const { ChangerStore } = useStores()

    function removeRow(e) {
        e.preventDefault()
        if (id !== 0o10)
            document.getElementById(id).remove()
    }

    return (
        <div id={id} name="row" className="flex justify-around w-full" {...change}>
            <p className="text-center bg-inherit w-[45%]">Title</p>
            <p className="text-center bg-inherit w-[45%]">Description</p>
            <button name="avoid" className="sbdolute right-0" onClick={removeRow}>X</button>
        </div>
    )
}