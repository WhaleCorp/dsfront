import { useEffect, useState } from "react";
import { SketchPicker } from "react-color";

export default function Changer({ obj }) {
    const [color, setColor] = useState({ rgb: { r: 0, g: 0, b: 0 } })
    const [textWeight, setTextWeight] = useState(4)
    const [bgImg, setBgImg] = useState(null)

    useEffect(() => {
        document.getElementById("change").style.backgroundColor = "rgb(" + color.rgb.r + "," + color.rgb.g + "," + color.rgb.b + ")";
    }, [color])

    useEffect(() => {
        console.log(textWeight)
        document.getElementById("change").style.fontSize = textWeight.toString()+"rem"
    }, [textWeight])

    useEffect(() => {
        console.log(bgImg)
        var reader = new FileReader();
        reader.onloadend = function () {
            document.getElementById('change').style.backgroundImage = "url(" + reader.result + ")";
        }
        if (bgImg) {
            reader.readAsDataURL(bgImg);
        }
        console.log(reader)
        //document.getElementById("change").style.backgroundImage = "url('" + bgImg.name + "')"
    }, [bgImg])

    return (
        <div className="absolute">
            <div className="flex gap-2 p-1 border-2 rounded-md border-black gap-2">
                <SketchPicker color={color} onChange={setColor} />
                <div className="flex gap-2">
                    <div className="flex flex-col">
                        <label>Text weight {textWeight}</label>
                        <input type="range" min="0.75" max="8" value={textWeight} onChange={e => setTextWeight(e.target.value)} step={0.25} />
                    </div>
                    <div className="flex flex-col">
                        <label>Background img</label>
                        <input type="file" onChange={e => setBgImg(e.target.files[0])} />
                    </div>
                </div>
            </div>
        </div>
    )
}