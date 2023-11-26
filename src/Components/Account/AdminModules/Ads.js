import { useEffect, useState } from "react"

export default function Ads() {
    const [ads, setAds] = useState()

    useEffect(() => {
        var reader = new FileReader();
        reader.onloadend = function () {
           document.getElementById("img").src=reader.result
        }
        if (ads) {
            reader.readAsDataURL(ads);
        }
    }, [ads])

    return (
        <div className="flex flex-col items-center">
            <input type="file" onChange={e => setAds(e.target.files[0])} />
            <img className="w-[40%]"id="img" src={ads} />
        </div>
    )
}