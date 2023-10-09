import { useEffect } from "react"
import { useStores } from "../../../../Store/MainStore"
import { createElement } from "react"

export default function PopUpSendTemplate({ setIsFinish,data }) {
    const { TemplateStore } = useStores()

    useEffect(() => {
        if (data !== undefined) {
            console.log(data,"jasbdhjabhsj")
            document.getElementById("test").appendChild(data)
        }
    },[])

    function close(e) {
        e.preventDefault()
        setIsFinish(false)
    }

    function send(e) {
        e.preventDefault()
    }

    return (
        <div className="fixed bg-gray-100 top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto h-full">
            <div className="flex w-full h-auto md:h-auto justify-around">
                <div id="test" className="relative bg-white rounded-lg w-[90%] shadow dark:bg-gray-700">

                </div>
            </div>
            <div className="flex justify-start gap-4 w-full">
                <button className="font-[Poppins] w-[20%] mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={send}>Send</button>
                <button className="font-[Poppins] w-[20%] mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={close}>Close</button>
            </div>
        </div>
    )
}