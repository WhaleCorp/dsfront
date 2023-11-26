import { useEffect, useState } from "react"
import PopUp from "./PopUp/PopUp"
import Monitor from "./Monitor"
import Templates from "./Templates/Templates"
import { useStores } from "../../../Store/MainStore"
import UserTable from "../AdminModules/UserTable"
import Cookies from "js-cookie"
import { useObserver } from "mobx-react"
import { useNavigate } from "react-router-dom"

export default function WorkPlace() {
    const { MonitorStore, UserStore } = useStores()
    const [monitors, setMonitors] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        getMonitors()
        document.querySelector('title').textContent
            = "Workplace";
    }, [])

    useEffect(()=>{
        if(Cookies.get('role')===undefined)
        navigate("/")
    })

    async function getMonitors() {
        await MonitorStore.getMonitorsRequest()
    }

    return useObserver(()=> (
        <div className="flex flex-col w-full justify-around h-full items-center">
            <div className="flex flex-col justify-around w-[90%] gap-4">
                <div className="flex justify-end gap-4 w-full md:justify-center">
                    <button onClick={() => setIsOpen(true)} className="font-[Poppins] w-[25%] mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Add Monitor</button>
                    <button className="font-[Poppins] w-[25%] mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Update Monitors</button>
                </div>
                {Cookies.get('role')!==undefined?Cookies.get('role').toLowerCase() === "admin" ?
                    <div>
                        <div className="border-2 h-[1px] mb-4 w-full"></div>
                        <h1 className="font-[Poppins] text-2xl mb-2">Templates</h1>
                        <UserTable />
                    </div>
                    : null:null}
                <div className="border-2 h-[1px] w-full"></div>
                <div>
                    <h1 className="font-[Poppins] text-2xl mb-2">Monitors</h1>
                    <div className="flex justify-around flex-wrap gap-4 md:justify-center">
                        {MonitorStore.getMonitors.map((element, key) => {
                            return <Monitor key={key} name={element.code} />
                        })}
                    </div>
                </div>
                <div className="border-2 h-[1px] w-full"></div>
                <h1 className="font-[Poppins] text-2xl mb-2">Templates</h1>
                <Templates />
                <div className="border-2 h-[1px] w-full"></div>
                <div id="userTemplate">

                </div>
            </div>
            <PopUp isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    ))
}