import { useState } from "react"
import { useStores } from "../../../../Store/MainStore"

export default function PopUpAddMonitor({ setIsSucces,setIsOpen, setIsRequested }) {
    const [code,setCode]=useState()
    const {UserStore}=useStores()

    async function linkMonitorToUser() {
        await UserStore.linkMonitor(code)
        if (UserStore.getStatus === 200) {
            setIsSucces(true)
            setIsRequested(true)
        }
        else {
            setIsSucces(false)
        }
    }

    return (
        <div className="flex flex-col justify-center p-5 gap-3 mt-3">
            <button onClick={() => setIsOpen(false)} className="absolute top-1 right-1 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" >
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                            </button>
            <h2 className="font-[Poppins]">Please input code from your monitor</h2>
            <div className="relative z-0 w-full group">
                <input type="text" onChange={(e) => setCode(e.target.value)} name="code" className="font-[Poppins] block py-2.5 px-0 w-full text-sm text-[#172c66] bg-transparent border-0 border-b-2 border-[#172c66] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="code" className="font-[Poppins] peer-focus:font-medium absolute text-sm text-[#172c66] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Monitor code</label>
            </div>
            <button onClick={linkMonitorToUser} className="font-[Poppins] w-full mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Add</button>
        </div>
    )
}