import { useStores } from "../../../../Store/MainStore"
import { useState, createElement, createRoot } from "react"
import CreateTemplate from "./CreateTemplate"
import Text from "./Modules/TextRow/Text"
import AddButton from "./Modules/AddButton"
import PopUpCreateTemplate from "../PopUp/PopUpCreateTemplate"
import { useObserver } from "mobx-react"
import PopUpSendTemplate from "../PopUp/PopUpSendTemplate"
import Changer from "./Modules/Changer"
import Ads from "../../AdminModules/Ads"
import ReadyToUse from "./ReadyToUse"
import FirstChange from "./Change/FirstChange"
import PopUpSendAds from "../PopUp/PopUpSendAds"

export default function Templates() {
    const { TemplateStore, ChangerStore } = useStores()
    const [isOpen, setIsOpen] = useState(false)
    const [redactState, setRedactState] = useState(0)
    const [isFinish, setIsFinish] = useState(false)
    const [isTemplate,setIsTemplate]= useState(false)
    const [data, setData] = useState({ clone: "", raw: "" })

    function states() {
        switch (TemplateStore.getState) {
            case 1:
                return (<CreateTemplate />)
            case 2:
                return (<ReadyToUse />)
            case 3:
                return (<FirstChange />)
            case 4:
                return (<Ads/>)
        }
    }

    async function sendInfo(e) {
        e.preventDefault()
        if (TemplateStore.getState === 1||TemplateStore.getState===3) {
            let raw = document.getElementById("template").outerHTML
            let clone = document.getElementById("template").cloneNode(true)
            clone.setAttribute("id", "clone")
            await removeButtons(clone)
            setData({ clone: clone, raw: raw })
            setIsTemplate(true)
        }
        else if (TemplateStore.getState === 4) {
            setIsTemplate(false)
        }
        setIsFinish(true)
    }



    async function removeButtons(node) {
        for (let i = 0; node.childElementCount; i++) {
            if (node.children[i] === undefined) return
            if (node.children[i].hasChildNodes())
                await removeButtons(node.children[i])

            if (node.children[i].hasAttribute("name")) {
                if (node.children[i].getAttribute("name") === "avoid")
                    node.children[i].remove()
            }

        }
    }

    return useObserver(() => (
        <div>
            {/* <ImgTemplate/> */}
            <div className="flex flex-col">
                {
                    TemplateStore.getState === 0 ? !isOpen ? <AddButton event={setIsOpen} /> : <PopUpCreateTemplate isOpen={isOpen} setIsOpen={setIsOpen} /> : states()
                }
            </div>
            <button className="font-[Poppins] w-[20%] mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center" onClick={sendInfo}>Send</button>

            {isFinish ? isTemplate?<PopUpSendTemplate data={data} setIsFinish={setIsFinish} /> : <PopUpSendAds setIsFinish={setIsFinish}/>:null}
            {
                ChangerStore.getId !== 11 ? <Changer /> : null
            }
        </div>
    ))
}