import { useStores } from "../../../../../Store/MainStore"

export default function PopUpAddButton({ text,module }) {
    const {TemplateStore} = useStores()
    function updateModule(e){
        e.preventDefault()
        TemplateStore.updateModule(module)
        TemplateStore.updateOpenAdd(false)
    }
    return (
        <button onClick={updateModule} className="mt-2 bg-white border-2 shadow-md hover:scale-105 rounded-md p-1 w-full">
                {text}
            </button>
    )
}