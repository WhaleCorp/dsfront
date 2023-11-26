import {  useState } from "react";
import Row from "../Row";
import Header from "../Header";
import useLongPress from "../../../../../../Helpers/UseLongPress";
import { useStores } from "../../../../../../Store/MainStore";

export default function Column({ id }) {
    const [row, setRow] = useState([{ id: 0, type: "row" }])
    const [count, setCount] = useState(2)
    const change = useLongPress({ onLongPress: (ev) => ChangerStore.setObject(ev.target) })
    const { ChangerStore } = useStores()

    function addRow(e) {
        e.preventDefault()
        setRow([...row, { id: count, type: "row" }])
        setCount(count + 1)
    }

    function addHeader(e) {
        e.preventDefault()
        setRow([...row, { id: count, type: "header" }])
        setCount(count + 1)
    }

    function removeTable(e) {
        e.preventDefault()
        document.getElementById(id).remove()
        //transferAll()
    }

    return (
        <div id={id} name="column" className="flex flex-col w-full border-2 min-h-full rounded-lg mx-1 px-1 py-5 justify-between" >
            <button name="avoid" className="absolute" onClick={removeTable}>X</button>
            <Header removable={false} />
            <div className="flex flex-col justify-center h-full">
                {row.map((e, key) => {
                    if (e.type === "row")
                        return <Row key={key} id={e.id + id.toString(2) + "r"} />
                    else if (e.type === "header")
                        return <Header key={key} id={e.id + id.toString(2) + "h"} />
                })}
            </div>
            <div name="avoid" className="flex justify-around">
                <button onClick={addRow} className="border-2 bg-white border-blue-600 rounded-lg w-[47%] self-center text-black self-end">Add Row</button>
                <button onClick={addHeader} className="border-2 bg-white border-blue-600 rounded-lg w-[47%] self-center text-black self-end">Add Header</button>
            </div>
        </div>
    )
}