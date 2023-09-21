import { useEffect, useState } from "react";
import Row from "./Row";
import { useStores } from "../../../../../Store/MainStore";
import { useObserver } from "mobx-react";

export default function Table({ setRemoveTableId, id }) {
    const { TemplateStore } = useStores()
    const [header, setHeader] = useState("TableHeader")
    const [row, setRow] = useState([])
    const [removeRowId, setRemoveRowId] = useState()

    function addRow(e) {
        e.preventDefault()
        setRow([...row, row.length])

    }

    function removeTable(e) {
        e.preventDefault()
        setRemoveTableId(id)
    }

    return useObserver(() => (
        <div className="text-amber-300 flex flex-col w-full border-2 h-full rounded-lg mx-1 p-1" >
            <button className="absolute" onClick={removeTable}>X</button>
            <input type="text" value={header} className="text-center bg-inherit" onChange={(e) => setHeader(e.target.value)} />
            <div className="flex flex-col justify-between h-full">
                <div>
                    {row.map((e) => {
                        return <Row key={e} id={e} setRemoveRowId={setRemoveRowId} />
                    })}
                </div>
                <button onClick={addRow} className="border-2 bg-white rounded-lg w-[50%] self-center text-black self-end">Add Row</button>
            </div>
        </div>
    ))
}