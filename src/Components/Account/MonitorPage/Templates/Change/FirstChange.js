import useLongPress from "../../../../../Helpers/UseLongPress"
import { useStores } from "../../../../../Store/MainStore"
import { useState, useEffect } from "react"
import Header from "../Modules/Header"

export default function FirstChange() {
    const [row, setRow] = useState([{ id: 0 }])
    const [count, setCount] = useState(2)
    const [rowS, setRowS] = useState([{ id: 0 }])
    const [countS, setCountS] = useState(2)
    const [bgImg, setBgImg] = useState(null)

    function addRow(e) {
        e.preventDefault()
        setRow([...row, { id: count }])
        setCount(count + 1)
    }

    function addRowS(e) {
        e.preventDefault()
        setRowS([...rowS, { id: countS }])
        setCountS(countS + 1)
    }

    useEffect(() => {
        try {
            var reader = new FileReader();
            reader.onloadend = function () {
                document.getElementById("ads").style.backgroundImage = "url(" + reader.result + ")";
            }
            if (bgImg) {
                reader.readAsDataURL(bgImg);
            }
        } catch (error) {
            console.error(error)
        }

        //document.getElementById("change").style.backgroundImage = "url('" + bgImg.name + "')"
    }, [bgImg])

    return (
        <div id="template" className="flex w-full h-[600px] justify-center">
            <div className="flex flex-col w-[49%] h-full">
                <div id="ads" className="h-full bg-contain bg-center bg-no-repeat">
                    <input name="avoid" type="file" onChange={e => setBgImg(e.target.files[0])} />
                </div>
                <div className="bg-[url('/public/smallFrame.jpeg')]  bg-contain bg-center bg-no-repeat h-full">
                    <div id="hor-fr" className="p-7 text-center">
                        {rowS.map((e, key) => {
                            return <Header key={key} id={e.id + e.id.toString(2) + "h"} />
                        })}
                        <div name="avoid" className="flex justify-around">
                            <button onClick={addRowS} className="border-2 bg-white border-blue-600 rounded-lg w-[47%] self-center text-black self-end">Add Text</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[url('/public/bigFrame.jpeg')] bg-contain bg-no-repeat bg-center w-[32%] ">
                <div id="ver-fr" className="p-9 text-center">
                    {row.map((e, key) => {
                        return <Header key={key} id={e.id + e.id.toString(2) + "h"} />
                    })}
                    <div name="avoid" className="flex justify-around">
                        <button onClick={addRow} className="border-2 bg-white border-blue-600 rounded-lg w-[47%] self-center text-black self-end">Add Text</button>
                    </div>
                </div>
            </div>
        </div>
    )
}