
import { useState, useMemo } from "react"
import { Link } from "react-router-dom";
import { User, UserPassword, CreateUserModel } from "../../Models/User.ts";
import { request } from "../../Helpers/Requests";
import { useIMask } from "react-imask";
import ErrorInput from "../../Helpers/ErrorInput";
export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [availableLogin, setAvailableLogin] = useState({ available: true, login: '' });
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const opts = { mask: '+{1} (000) 000-0000' };
    const { ref } = useIMask(opts, {
        onChange: (e) => { console.log(e);setPhoneNumber(e.target.value) }
    });

    async function CheckLogins(login) {
        if (login !== '')
            request("User/CheckLogins", "GET", [login], ["login"]).then((result) => setAvailableLogin(result))
        // if (availableLogin.available === false) {
        //     div = 'outline outline-offset-[10px] outline-red-500 outline-2 rounded-md';
        // }
    }

    async function SignUp(e) {
        e.preventDefault()
        console.log(phoneNumber)
        let user = new CreateUserModel(new User(availableLogin.login, firstName, lastName, email, phoneNumber, 0), new UserPassword(password))
        console.log(user)
        if (availableLogin.available && availableLogin.login !== '')
            request("User/CreateNewUser", "POST", user).then((result) => console.log(result))
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create your free account
                        </h1>
                        <form onSubmit={SignUp} className="space-y-4 md:space-y-6" action="#">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" onChange={(e) => setFirstName(e.target.value)} name="firstName" className="font-[Poppins] block py-2.5 px-0 w-full text-sm text-[#172c66] bg-transparent border-0 border-b-2 border-[#172c66] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="firstName" className="font-[Poppins] peer-focus:font-medium absolute text-sm text-[#172c66] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" onChange={(e) => setLastName(e.target.value)} name="lastName" className="font-[Poppins] block py-2.5 px-0 w-full text-sm text-[#172c66] bg-transparent border-0 border-b-2 border-[#172c66] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="lastName" className="font-[Poppins] peer-focus:font-medium absolute text-sm text-[#172c66] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" onChange={(e) => CheckLogins(e.target.value)} name="login" className="font-[Poppins] block py-2.5 px-0 w-full text-sm text-[#172c66] bg-transparent border-0 border-b-2 border-[#172c66] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="login" className="font-[Poppins] peer-focus:font-medium absolute text-sm text-[#172c66] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Login</label>
                                <ErrorInput isCorrect={availableLogin.available}/>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" className="font-[Poppins] block py-2.5 px-0 w-full text-sm text-[#172c66] bg-transparent border-0 border-b-2 border-[#172c66] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="email" className="font-[Poppins] peer-focus:font-medium absolute text-sm text-[#172c66] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" defaultValue="" ref={ref} name="phone" className="font-[Poppins] block py-2.5 px-0 w-full text-sm text-[#172c66] bg-transparent border-0 border-b-2 border-[#172c66] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="phone" className="font-[Poppins] peer-focus:font-medium absolute text-sm text-[#172c66] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="password" onChange={(e) => setPassword(e.target.value)} name="pass" className="font-[Poppins] block py-2.5 px-0 w-full text-sm text-[#172c66] bg-transparent border-0 border-b-2 border-[#172c66] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="pass" className="font-[Poppins] peer-focus:font-medium absolute text-sm text-[#172c66] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="password" onChange={(e) => setRePassword(e.target.value)} name="repass" className="font-[Poppins] block py-2.5 px-0 w-full text-sm text-[#172c66] bg-transparent border-0 border-b-2 border-[#172c66] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="repass" className="font-[Poppins] peer-focus:font-medium absolute text-sm text-[#172c66] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Repeat password</label>
                            </div>
                            <button type="submit" className="font-[Poppins] w-[100%] mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Create</button>
                            <div className="flex gap-2 items-center">
                                <p className=" font-[Poppins] text-sm font-light text-gray-500 dark:text-gray-400">
                                    Have an account ?
                                </p>
                                <div className="font-medium text-blue-600 hover:underline dark:text-primary-500"><Link to="/login">Sign in</Link></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </section >

    )
}