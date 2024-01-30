import { useStores } from "../../../../../Store/MainStore"
export default function TemplateButton({ text, buttonText, state }) {
    const {TemplateStore} = useStores()
    
    function updateState(e) {
        e.preventDefault()
        TemplateStore.updateState(state)
    }

    return (
        <div className="w-[25%] flex flex-col justify-between">
            <p className="md:text-xl smm:text-sm text-center mt-2">
                {text}
            </p>
            <button onClick={updateState} className="mt-2 border-2 border-blue-600 hover:scale-105 rounded-md p-1 w-full">
                {buttonText}
            </button>
        </div>
    )
}