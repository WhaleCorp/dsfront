import { useStores } from "../Store/MainStore"

export default function CloseButton(){
const {TemplateStore}=useStores()

    function close(e) {
        e.preventDefault()
        TemplateStore.updateState(0)
    }
    return(
        <button name="avoid" className="absolute right-5 text-2xl" onClick={close}>X</button>
    )
}