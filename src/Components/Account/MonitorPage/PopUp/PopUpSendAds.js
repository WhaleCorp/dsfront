import { useStores } from "../../../../Store/MainStore"

export default function PopUpSendAds({ setIsFinish }) {
    const {TemplateStore} = useStores()

    function close(e) {
        e.preventDefault()
        setIsFinish(false)
    }

    function sendAds(e) {
        e.preventDefault()
        TemplateStore.postSendAds()
        setIsFinish(false)
    }

    return (
        <div className="fixed bg-gray-100 top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto h-full">
            <div className="flex w-full justify-center gap-2"> 
                <button className="w-[20%] mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={sendAds}>Send</button>
                <button className="w-[20%] mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={close}>Cancel</button>
            </div>
        </div>
    )
}