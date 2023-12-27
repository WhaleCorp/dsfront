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
           TemplateStore.setAds(LZString.compress(reader.result))
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

    function lzw_encode(s) {
        var dict = {};
        var data = (s + "").split("");
        var out = [];
        var currChar;
        var phrase = data[0];
        var code = 256;
        for (var i=1; i<data.length; i++) {
            currChar=data[i];
            if (dict[phrase + currChar] != null) {
                phrase += currChar;
            }
            else {
                out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
                dict[phrase + currChar] = code;
                code++;
                phrase=currChar;
            }
        }
        out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
        for (var i=0; i<out.length; i++) {
            out[i] = String.fromCharCode(out[i]);
        }
        return out.join("");
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