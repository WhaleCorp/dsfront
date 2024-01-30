import { useEffect, useState } from "react";
import { SketchPicker } from "react-color";
import useLongPress from "../../../../../Helpers/UseLongPress";
import { useStores } from "../../../../../Store/MainStore";
import { useObserver } from "mobx-react";

export default function Changer({ obj }) {
    const { ChangerStore } = useStores()
    const [color, setColor] = useState({ rgb: { r: 255, g: 255, b: 255, a: 0 } })
    const [textWeight, setTextWeight] = useState(1)
    const [bgImg, setBgImg] = useState(null)
    const [height, setHeight] = useState()
    const [width, setWidth] = useState()
    const [textColor, setTextColor] = useState({ rgb: { r: 255, g: 255, b: 255 } })
    const [changerOffsetHeight, setChangerOffsetHeight] = useState(0)
    const [text, setText] = useState("Change")
    const [textTwo, setTextTwo] = useState("Change")


    // useEffect(() => {
    //     document.getElementById("change").style.height = height 
    // }, [height])

    // useEffect(() => {
    //     document.getElementById("change").style.width = width
    // }, [width])

    useEffect(() => {
        try {
            document.getElementById(ChangerStore.getId).style.backgroundColor = "rgb(" + color.rgb.r + "," + color.rgb.g + "," + color.rgb.b + "," + color.rgb.a + ")";
        } catch (error) {
            console.error(error)
        }
    }, [color])

    useEffect(() => {
        try {
            document.getElementById(ChangerStore.getId).style.fontSize = textWeight.toString() + "rem"
        } catch (error) {
            console.error(error)
        }
    }, [textWeight])

    useEffect(() => {
        try {
            var reader = new FileReader();
            reader.onloadend = function () {
                document.getElementById(ChangerStore.getId).style.backgroundImage = "url(" + reader.result + ")";
            }
            if (bgImg) {
                reader.readAsDataURL(bgImg);
            }
        } catch (error) {
            console.error(error)
        }

        //document.getElementById("change").style.backgroundImage = "url('" + bgImg.name + "')"
    }, [bgImg])

    useEffect(() => {
        try {
            setChangerOffsetHeight(document.getElementById(ChangerStore.getId).offsetHeight)
        } catch (error) {
            console.error(error)
        }
    }, [changerOffsetHeight])

    useEffect(() => {
        if (text === "Change") return
        try {
            document.getElementById(ChangerStore.getId).children[0].textContent = text
        } catch (error) {
            console.error(error)
        }
    }, [text])

    useEffect(() => {
        if (textTwo === "Change") return
        try {
            document.getElementById(ChangerStore.getId).children[1].textContent = textTwo
        } catch (error) {
            console.error(error)
        }
    }, [textTwo])

    function close(e) {
        e.preventDefault()
        ChangerStore.setId(11)
    }

    function toggleSwitch(e) {
        e.preventDefault()
    }

    return useObserver(() => (
        <div className="absolute z-10 bg-white rounded-md" style={{ top: ChangerStore.getPosition.top + changerOffsetHeight, left: ChangerStore.getPosition.left }}>
            <button className="absolute z-10 right-1 text-xl" onClick={close}>X</button>
            <div className="flex gap-2 p-1 border-2 rounded-md border-black gap-2">
                {/* <SketchPicker color={color} onChange={setColor} /> */}
                <div className="flex flex-col gap-2">
                    {/* <div>
                        <label className="relative inline-flex items-center cursor-pointer" onChange={toggleSwitch}>
                            <span className="mr-3 text-sm font-medium text-gray-900">Background color</span>
                            <div className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </div>
                            <span className="ml-3 text-sm font-medium text-gray-900 ">Text color</span>
                        </label>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                            <label>Text weight {textWeight}</label>
                            <input type="range" min="0.75" max="8" value={textWeight} onChange={e => setTextWeight(e.target.value)} step={0.25} />
                        </div>
                        <div className="flex flex-col">
                            <label>Background img</label>
                            <input type="file" onChange={e => setBgImg(e.target.files[0])} />
                        </div>
                    </div> */}
                    <div className="flex items-center gap-4">
                        <input type="text" className="border-2 border-blue-600 rounded-md" onChange={(e) => setText(e.target.value)} />
                        {
                            document.getElementById(ChangerStore.getId).hasAttribute("name") ? document.getElementById(ChangerStore.getId).getAttribute("name") === "row" ? <input type="text" className="border-2 border-blue-600 rounded-md" onChange={(e) => setTextTwo(e.target.value)} /> : null : null
                        }
                    </div>
                </div>
            </div>
        </div>
    ))
}