import PopSuccesOrError from "./PopUpSuccesOrError"
export default function PopUpResult({ setIsOpen, isSuccess }) {
    return (
        <div className="flex flex-col justify-center w-full gap-3">
            {isSuccess
            ?<PopSuccesOrError text="Success" isSuccess={isSuccess} />
            :<PopSuccesOrError text="Error" isSuccess={isSuccess} />
            }
            
            <button onClick={() => setIsOpen(false)} className="font-[Poppins] text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4">Close</button>
        </div>
    )
}