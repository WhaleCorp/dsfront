import AddButton from "../AddButton"
import Column from "./Column"
import { useState } from "react"

export default function Table() {
    const [table, setTable] = useState([])
    const [count, setCount] = useState(0)

    function addCol(e) {
        e.preventDefault()
        setTable([...table, { id: count }])
        setCount(count + 1)
        console.log(count, "count")
        console.log(table, "AddColl")

    }

    
    

    function addRow(e) {
        e.preventDefault()
    }

    return (
        <div className="flex flex-col py-2 h-full">
            <div className="flex py-4">
                {
                    table.map((e, key) => {
                        return <Column key={key} id={e.id} />
                    })
                }
            </div>
            <button onClick={addCol} className="border-blue-600 border-2 m-1 self-center rounded-full b-black bg-white shadow-md self-center w-[30px] h-[30px]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg></button>
        </div>
    )
}