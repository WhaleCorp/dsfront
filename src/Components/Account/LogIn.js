import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, setObjToCookie } from "../../Helpers/Cookies";
import { request } from "../../Helpers/Requests";
export default function Login() {
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    async function LogIn(e) {
        e.preventDefault()
            ; (await request("Auth/Auth", "POST", { Login: login, Password: pass })).json()
                .then((data) => {
                    setObjToCookie(data)
                    navigate("/workplace")
                })
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form onSubmit={LogIn} className="space-y-4 md:space-y-6" action="#">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" onChange={(e) => setLogin(e.target.value)} name="login" className="block py-2.5 px-0 w-full text-sm text-[#172c66] bg-transparent border-0 border-b-2 border-[#172c66] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="login" className="font-[Poppins] peer-focus:font-medium absolute text-sm text-[#172c66] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Login</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="password" onChange={(e) => setPass(e.target.value)} name="password" className="block py-2.5 px-0 w-full text-sm text-[#172c66] bg-transparent border-0 border-b-2 border-[#172c66] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="password" className="font-[Poppins] peer-focus:font-medium absolute text-sm text-[#172c66] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" aria-describedby="remember" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="font-[Poppins] text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>

                                <div href="#" className="font-[Poppins] text-sm font-medium text-blue-600 hover:underline dark:text-primary-500"><Link to="/">Forgot password?</Link></div>
                            </div>
                            <button type="submit" className="font-[Poppins] w-[100%] mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Submit</button>
                            <div className="flex gap-2 items-center">
                                <p className=" font-[Poppins] text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet?
                                </p>
                                <div className="font-medium text-blue-600 hover:underline dark:text-primary-500"><Link to="/signup">Sign up</Link></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </section >
    )
}