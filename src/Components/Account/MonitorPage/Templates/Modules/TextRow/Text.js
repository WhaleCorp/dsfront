import { useState } from "react"
import InputText from "./InputText"

export default function Text() {
    const [count, setCount] = useState(0)
    const [texts, setTexts] = useState([])

    function addText(e) {
        e.preventDefault()
        setTexts([...texts, { id: count }])
        setCount(count + 1)
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-around w-[90%] gap-2">
                {texts.map((e, key) => {
                    return <InputText id={e.id+"t"} key={key} />
                })}
            </div>
            <button name="avoid" onClick={addText} className="border-blue-600 border-2 text-black m-1 self-center rounded-full b-black bg-white shadow-md self-center w-[30px] h-[30px]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg></button>
        </div>
    )
}