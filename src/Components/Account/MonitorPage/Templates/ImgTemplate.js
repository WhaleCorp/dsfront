import { useState } from "react"
import { request } from "../../../../Helpers/Requests"

export default function ImgTemplate() {
    const [img,setImg] =useState(new FormData())
    function submit(){
        console.log(img)
        request("Monitor/PostData")
    }
    return (
        <section>

                <input type="file" name="file" onChange={(e)=>setImg(e.target.files[0])}/>
                <button onClick={submit} type="submit"  className="font-[Poppins] w-[100%] mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Submit</button>
        </section>
    )
}