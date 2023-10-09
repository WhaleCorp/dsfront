import { Link } from "react-router-dom"
import { useStores } from "../Store/MainStore"
import { useObserver } from "mobx-react"
import { useEffect, useState } from "react"
export default function Nav() {
    const [text, setText] = useState()
    useEffect(() => {
        if (document.location.pathname === '/workplace')
            setText("Sign Out")
        else
            setText("Sign In")
    })
    return useObserver(() => (
        <nav className="flex flex-col items-center w-full mt-4">
            <div className="flex justify-between w-[90%]">
                <img src="logo192.png" alt="Logo" className="w-[40px]" />
                <div className="flex gap-2">
                    <button className="font-[Poppins]">
                        <Link to="/">
                            Home
                        </Link>
                    </button>
                    <button className="font-[Poppins]">
                        <Link to="/info">
                            Info
                        </Link>
                    </button>

                </div>
                <Link to="/login" className="font-[Poppins] max-w-[20%] justify-self-end text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
                    {text}
                </Link>
            </div>
        </nav>
    ))
}