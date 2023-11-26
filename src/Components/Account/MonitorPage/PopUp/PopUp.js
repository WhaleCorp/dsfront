import { useEffect, useState } from "react"
import PopUpAddMonitor from "./PopUpAddMonitor";
import PopUpResult from "./PopUpResult";

export default function PopUp({ isOpen, setIsOpen }) {
    const [isSuccess, setIsSucces] = useState(false)
    const [isRequested, setIsRequested] = useState(false)

    useEffect(() => {
        setIsOpen(isOpen)
        setIsSucces(false)
        setIsRequested(false)
    },[isOpen])

    return (
        <div>
            {isOpen === true ?
                <div className="fixed bg-gray-100 top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto h-full">
                    <div className="flex w-full h-auto md:h-auto justify-around">
                        <div className="relative bg-white rounded-lg shadow">
                            {isRequested
                                ? <PopUpResult setIsOpen={setIsOpen} isSuccess={isSuccess} setIsSucces={setIsSucces}/>
                                : <PopUpAddMonitor setIsSucces={setIsSucces} setIsOpen={setIsOpen} setIsRequested={setIsRequested} />}
                        </div>
                    </div>
                </div> : <span></span>
            }
        </div>
    )
}