import { Link } from "react-router-dom"

export default function Main() {

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Link to="/signin" className="font-[Poppins] max-w-[20%] justify-self-end text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
                Sign in
            </Link>
        </div>
    )
}