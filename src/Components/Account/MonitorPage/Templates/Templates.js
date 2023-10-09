import { useStores } from "../../../../Store/MainStore"
import { useState, createElement, createRoot } from "react"
import CreateTemplate from "./CreateTemplate"
import Text from "./Modules/TextRow/Text"
import AddButton from "./Modules/AddButton"
import PopUpCreateTemplate from "../PopUp/PopUpCreateTemplate"
import { useObserver } from "mobx-react"
import PopUpSendTemplate from "../PopUp/PopUpSendTemplate"
import Changer from "./Modules/Changer"

export default function Templates() {
    const { TemplateStore } = useStores()
    const [isOpen, setIsOpen] = useState(false)
    const [redactState, setRedactState] = useState(0)
    const [isFinish, setIsFinish] = useState(false)
    const [data, setData] = useState()

    function states() {
        switch (TemplateStore.getState) {
            case 1:
                return (<CreateTemplate />)
            case 2:
                return (<Text />)
            case 3:
                return (<Text />)
        }
    }

    async function sendInfo(e) {
        e.preventDefault()
        let node = document.getElementById("template").cloneNode(true)
        node.setAttribute("id", "clone")
        await removeButtons(node)
        setData(node)
        setIsFinish(true)
        //await setName(data)
        //TemplateStore.postDataToDsPAge(data)
    }

    function transferComputedStyle(node) {
        var cs = getComputedStyle(node, null);
        for (let i = 0; i < cs.length; i++) {
            var s = cs[i] + "";
            node.style[s] = cs[s];
        }
        console.log(node)
    }

    function transferAll() {
        var all = document.getElementsByName("change");
        var i;
        for (i = 0; i < all.length; i++) {
            console.log(all[i].hasAttribute("name"))
            transferComputedStyle(all[i]);
        }
    }

    /**
     * @param {NodeListOf<HTMLElement>} node
     */
    async function setName(node) {
        for (let i = 0; node.childElementCount; i++) {
            if (node.children[i].hasAttribute("name")) {
                if (node.children[i].getAttribute("name") !== "avoid")
                    node.children[i].setAttribute("name", "change")
            }
            else
                node.children[i].setAttribute("name", "change")
            if (node.children[i].hasChildNodes())
                await setName(node.children[i])
        }
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
            <div id="change" className="flex bg-black text-2xl text-white">jsdhfjks</div>
            <div className="flex flex-col">
                {
                    TemplateStore.getState === 0 ? !isOpen ? <AddButton event={setIsOpen} /> : <PopUpCreateTemplate isOpen={isOpen} setIsOpen={setIsOpen} /> : states()
                }
            </div>
            <button className="font-[Poppins] w-[20%] mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center" onClick={sendInfo}>Send</button>

            {isFinish ? <PopUpSendTemplate data={data} setIsFinish={setIsFinish} /> : null}
            <Changer />
        </div>
    ))
}