import { Link } from "react-router-dom"
import { useObserver } from "mobx-react"
import { useStores } from "../Store/MainStore"
export default function Nav() {
    const { UserStore } = useStores()

    function logout() {
        UserStore.logOut()
    }

    return useObserver(() => (
        <nav className="flex flex-col items-center w-full mt-4">
            <div className="flex justify-end w-[90%]">
                <Link to="/" onClick={logout} className="font-[Poppins] max-w-[20%] justify-self-end text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none text-center focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5">
                    Logout
                </Link>
            </div>
        </nav>
    ))
}