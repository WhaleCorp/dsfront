import { Link } from "react-router-dom"

export default function Main() {

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <Link to="/signin" className="font-[Poppins] justify-self-end text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  rounded-lg text-md md:w-[20%] px-5 py-2.5 text-center mdm:w-[60%]">
                Sign in
            </Link>
            <Link to="/signup" className="font-[Poppins] justify-self-end text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md md:w-[20%] px-5 py-2.5 text-center mdm:w-[60%]">
                Sign up
            </Link>
        </div>
    )
}