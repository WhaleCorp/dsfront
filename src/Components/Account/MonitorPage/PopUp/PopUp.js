import { useEffect, useState } from "react"
import { getCookie } from "../../../../Helpers/Cookies";
import { request } from "../../../../Helpers/Requests";
import PopUpAddMonitor from "./PopUpAddMonitor";
import PopUpResult from "./PopUpResult";
export default function PopUp({ isOpen, setIsOpen }) {
    const [code, setCode] = useState('');
    const [isSuccess, setIsSucces] = useState(false)
    const [isRequested, setIsRequested] = useState(false)
    useEffect(() => {
        setIsOpen(isOpen)
    }, [])

    async function linkMonitorToUser() {
        await request("Monitor/LinkMonitorToUser", "PUT", { UserId: getCookie("userId"), MonitoName: code }, null, "r").then((result) => {
            if (result.status === 200) {
                setIsSucces(true)
                setIsRequested(true)
            }
            else {
                setIsSucces(false)
            }
        })
    }

    return (
        <div>
            {isOpen === true ?
                <div className="fixed bg-gray-100 top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto h-full">
                    <div className="flex w-full h-auto md:h-auto justify-around">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {isRequested
                                ? <PopUpResult setIsOpen={setIsOpen} isSuccess={isSuccess} />
                                : <PopUpAddMonitor setCode={setCode} setIsOpen={setIsOpen} linkMonitorToUser={linkMonitorToUser} />}
                        </div>
                    </div>
                </div> : <span></span>
            }
        </div>
    )
}