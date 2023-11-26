import { useState } from "react"
import AddButton from "./Modules/AddButton"
import PopUpAdd from "../PopUp/PopUpAdd"
import { useStores } from "../../../../Store/MainStore"
import { useObserver } from "mobx-react"
import useLongPress from "../../../../Helpers/UseLongPress"

export default function CreateTemplate() {
    const { TemplateStore } = useStores()
    const [isOpen, setIsOpen] = useState(false)
    const change = useLongPress({ onLongPress: (ev) => console.log(ev.target.parentElement.parentElement) })
    const { ChangerStore} = useStores()

    return useObserver(() => (
        <div id="template" className="border-2 rounded-md border-black flex flex-col w-full py-4 bg-[url('/public/wood.jpg')] bg-repeat bg-contain text-amber-200">
            {
                TemplateStore.getModule.map((e,key) => {
                    return <div id={key} key={key} className="my-5"><>{e}</></div>
                })
            }
            {TemplateStore.getOpenAdd ? <PopUpAdd /> : <AddButton event={setIsOpen} />}
        </div>
    ))
}