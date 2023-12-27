import useLongPress from "../../../../../Helpers/UseLongPress"
import { useStores } from "../../../../../Store/MainStore"
import { useState, useEffect } from "react"
import Header from "../Modules/Header"
import CloseButton from "../../../../CloseButton"

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
        <div id="template" className="flex w-full h-screen justify-center">
            <div className="flex flex-col w-[55%] h-full self-end">
                <div id="ads" className="h-[50%] bg-contain bg-no-repeat bg-center">
                    <input name="avoid" type="file" onChange={e => setBgImg(e.target.files[0])} />
                </div>
                <div className="bg-[url('/public/smallFrame.jpeg')] bg-contain bg-center bg-top bg-no-repeat h-[50%]">
                    <div id="hor-fr" className="flex flex-col p-7 justify-self-start">
                        {rowS.map((e, key) => {
                            return <Header key={key} id={e.id + e.id.toString(2) + "h"} />
                        })}
                        <div name="avoid" className="flex justify-around">
                            <button onClick={addRowS} className="border-2 bg-white border-blue-600 rounded-lg w-[40%] self-center text-black self-end 3xl:text-9xl">Add Text</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[url('/public/bigFrame.jpeg')] bg-center bg-no-repeat bg-top bg-contain w-[43.5%] justify-self-start">
                <div id="ver-fr" className="p-9 self-start">
                    {row.map((e, key) => {
                        return <Header key={key} id={e.id + e.id.toString(2) + "h"} />
                    })}
                    <div name="avoid" className="flex justify-around">
                        <button onClick={addRow} className="border-2 bg-white border-blue-600 rounded-lg w-[40%] self-center text-black self-end 3xl:text-9xl">Add Text</button>
                    </div>
                </div>
            </div>
            <CloseButton/>
        </div>
    )
}