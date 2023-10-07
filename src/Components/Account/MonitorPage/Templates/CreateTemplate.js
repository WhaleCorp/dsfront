import Text from "./Modules/TextRow/Text"
import { DateTime } from "./Modules/DateTime"
import Table from "./Modules/Table/Column"
import { useEffect, useState } from "react"
import AddButton from "./Modules/AddButton"
import PopUpAdd from "../PopUp/PopUpAdd"
import { useStores } from "../../../../Store/MainStore"
import { useObserver } from "mobx-react"
import { toJS } from "mobx"
export default function CreateTemplate() {
    const { TemplateStore } = useStores()
    const [isOpen, setIsOpen] = useState(false)

    return useObserver(() => (
        <div id="template" className="border-2 rounded-md border-black flex flex-col w-full pt-2">
            {
                TemplateStore.getModule.map((e,key) => {
                    return <div key={key}><>{e}</></div>
                })
            }
            {TemplateStore.getOpenAdd ? <PopUpAdd /> : <AddButton event={setIsOpen} />}
        </div>
    ))
}