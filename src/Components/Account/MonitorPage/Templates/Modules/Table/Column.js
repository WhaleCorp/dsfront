import { useEffect, useState } from "react";
import Row from "../Row";
import Header from "../Header";

export default function Column({ id }) {
    const [row, setRow] = useState([{ id: 0, type: "row" }])
    const [count, setCount] = useState(2)

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

    function transferComputedStyle(node) {
        var cs = getComputedStyle(node, null);
        for (let i = 0; i < cs.length; i++) {
            var s = cs[i] + "";
            node.style[s] = cs[s];
        }
        console.log(node)
    }
    function transferAll() {
        var all = document.getElementsByName("null");
        var i;
        for (i = 0; i < all.length; i++) {
            transferComputedStyle(all[i]);
        }
    }


    return (
        <div id={id} className="flex flex-col w-full border-2 min-h-full rounded-lg mx-1 p-1 justify-between" >
            <button className="absolute" onClick={removeTable}>X</button>
            <Header removable={false}/>
            <div className="flex flex-col items-center">
                <div>
                    {row.map((e, key) => {
                        if (e.type === "row")
                            return <Row key={key} id={e.id + id.toString(2) + "r"} />
                        else if (e.type === "header")
                            return <Header key={key} id={e.id + id.toString(2) + "h"} />
                    })}</div>
            </div>
            <div className="flex justify-around">
                <button onClick={addRow} className="border-2 bg-white border-blue-600 rounded-lg w-[47%] self-center text-black self-end">Add Row</button>
                <button onClick={addHeader} className="border-2 bg-white border-blue-600 rounded-lg w-[47%] self-center text-black self-end">Add Header</button>
            </div>
        </div>
    )
}