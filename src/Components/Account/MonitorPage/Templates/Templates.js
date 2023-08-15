import CommonTemplate from "./CommonTemplate"
import ImgTemplate from "./ImgTemplate"
export default function Templates(){
    function sendInfo(){
        
    }
    return(
        <div>
            {/* <ImgTemplate/> */}
            <CommonTemplate/>
            <button className="border-2 rounded-lg border-black w-[20%] mt-5" onClick={sendInfo}>Send</button>
        </div>
    )
}