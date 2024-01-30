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
        <div id="template" className="flex w-full md:h-screen smm:h-[25vh] justify-center">
            <div className="flex flex-col w-[57%] h-full">
                <div id="ads" className="h-[50%] bg-contain w-full bg-no-repeat bg-center">
                    {/* <input className="smm:text-xs md:text-xl" name="avoid" type="file" onChange={e => setBgImg(e.target.files[0])} /> */}
                </div>
                <div className="h-[50%] w-full relative">
                    <img src="smallFrame.jpeg" className="absolute w-full h-[70%] items-end bottom-0"/>
                    <div id="hor-fr" className="absolute bottom-0 w-full z-10 h-[70%] flex flex-col md:p-10 smm:pt-2 justify-self-start">
                        {rowS.map((e, key) => {
                            return <Header key={key} id={e.id + e.id.toString(2) + "h"} />
                        })}
                        <div name="avoid" className="flex justify-around">
                            <button onClick={addRowS} className="border-2 bg-white border-blue-600 rounded-lg w-[40%] smm:w-[50%] self-center text-black self-end 3xl:text-9xl smm:text-xxs">Add Text</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[43%] h-full relative">
                <img src="bigFrame.jpeg" className="absolute w-full h-full bottom-0 left-0"/>
                <div id="ver-fr" className="smm:pt-3 w-full h-full md:pt-11 absolute top-0 bottom-0 flex flex-col justify-center">
                    {row.map((e, key) => {
                        return <Header key={key} id={e.id + e.id.toString(2) + "v"} />
                    })}
                    <div name="avoid" className="flex justify-around">
                        <button onClick={addRow} className="border-2 bg-white border-blue-600 rounded-lg w-[40%] smm:w-[60%] self-center text-black self-end 3xl:text-9xl smm:text-xxs">Add Text</button>
                    </div>
                </div>
            </div>
            <CloseButton/>
        </div>
    )
}