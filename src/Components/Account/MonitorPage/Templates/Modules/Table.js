import { useEffect, useState } from "react";
import Row from "./Row";
import { useStores } from "../../../../../Store/MainStore";
import { useObserver } from "mobx-react";

export default function Table({ setRemoveTableId, id }) {
    const { TemplateStore } = useStores()
    const [header, setHeader] = useState("TableHeader")
    const [row, setRow] = useState([<Row />])
    function addRow(e) {
        e.preventDefault()
        setRow([...row, <Row />])
        //TemplateStore.addRow(model.id)
    }

    return useObserver(() => (
        <div className="text-amber-300 flex-col w-full flex border-2 h-full rounded-lg mx-1 p-1 justify-between" >
            <button className="absolute" onClick={setRemoveTableId(id)}>X</button>
            <input type="text" value={header} className="text-center bg-inherit" onChange={(e) => setHeader(e.target.value)} />
            <div>
                {row.map((ro, key) => {
                    return <div key={key} className="w-full">{ro}</div>
                })}
            </div>
            <button onClick={addRow} className="border-2 bg-white rounded-lg w-[50%] self-center text-black self-end">Add Row</button>
        </div>
    ))
}