import { Link } from "react-router-dom"
export default function Nav() {
    return (
        <nav className="flex flex-col items-center w-full mt-4">
            <div className="flex justify-between w-[90%]">
                <img src="" alt="Logo" />
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
                <button className="font-[Poppins] w-[25%] text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
                    <Link to="/login">
                        Log In
                    </Link>
                </button>
            </div>
        </nav>
    )
}