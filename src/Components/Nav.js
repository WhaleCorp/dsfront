import { Link } from "react-router-dom"
export default function Nav() {
    return (
        <nav className="flex justify-around">
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
            <button className="w-28 h-8 bg-gray-200 font-[Poppins]">
                <Link to="/login">
                    Log In
                </Link>
            </button>
        </nav>
    )
}