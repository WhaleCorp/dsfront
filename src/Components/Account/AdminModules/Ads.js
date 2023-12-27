import { useEffect, useState } from "react"
import { useStores } from "../../../Store/MainStore";
import CloseButton from "../../CloseButton";
import LZString from "lz-string/libs/lz-string";

export default function Ads() {
    const [ads, setAds] = useState()
    const [orientation,setOrientation] = useState("horizontal")
    const {TemplateStore} = useStores()

    useEffect(() => {
        var reader = new FileReader();
        reader.onloadend = function () {
           document.getElementById("img").src=reader.result
           TemplateStore.setAds(reader.result)
        }
        if (ads) {
            reader.readAsDataURL(ads);
            
        }
    }, [ads])

    function setOrientationFunc(e){
        e.preventDefault()
        
        setOrientation(e.target.value)
        TemplateStore.setOrientation(orientation)
    }

    return (
        <div className="flex flex-col items-center">
            <input type="file" onChange={e => setAds(e.target.files[0])} />
            <img className="w-[40%]"id="img" src={ads} />
            <select name="orientation" id="orientation" defaultValue={orientation} onChange={setOrientationFunc}>
                    <option value="vertical">Vertical</option>
                    <option value="horizontal">Horizontal</option>
                </select>
            <CloseButton/>
        </div>
    )
}