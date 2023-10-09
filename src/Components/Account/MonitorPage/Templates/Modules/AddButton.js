import { useStores } from "../../../../../Store/MainStore"

export default function AddButton({ event }) {
    const {TemplateStore} = useStores()
    function open(e){
        e.preventDefault()
        TemplateStore.updateOpenAdd(true)
        event(true)
    }
    return (
        <button onClick={open} name="avoid" className="border-2 border-blue-600 m-1 rounded-full b-black bg-white shadow-md self-center w-[50px] h-[50px]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        </button>
    )
}