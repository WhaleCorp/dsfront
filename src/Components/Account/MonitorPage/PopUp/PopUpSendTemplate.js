import { useEffect } from "react"
import { useStores } from "../../../../Store/MainStore"
import DomToImage from "dom-to-image"

export default function PopUpSendTemplate({ setIsFinish, data }) {
    const { TemplateStore } = useStores()

    useEffect(() => {
        if (data.clone !== undefined) {
            document.getElementById("test").appendChild(data.clone)
        }
    }, [])

    function close(e) {
        e.preventDefault()
        setIsFinish(false)
    }

    async function send(e) {
        e.preventDefault()
        await setName(document.getElementById('clone'))
        transferAll()
        var node = document.getElementById('test');
        console.log(node, "node")
        await DomToImage.toPng(node)
            .then(function (dataUrl) {
                TemplateStore.postDataToDsPAge({ RawData: data.raw, Data: dataUrl, Code: TemplateStore.getCode })
                setIsFinish(false)
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
        // console.log({ raw: data.raw, data: document.getElementById('clone').outerHTML, code: TemplateStore.getCode })
    }

    function transferComputedStyle(node) {
        var cs = getComputedStyle(node, null);
        for (let i = 0; i < cs.length; i++) {
            var s = cs[i] + "";
            node.style[s] = cs[s];
        }
    }

    function transferAll() {
        var all = document.getElementsByName("change");
        var i;
        for (i = 0; i < all.length; i++) {
            transferComputedStyle(all[i]);
        }
    }

    /**
     * @param {NodeListOf<HTMLElement>} node
     */
    async function setName(node) {
        if (node.hasAttribute("name")) {
            if (node.getAttribute("name") !== "avoid")
                node.setAttribute("name", "change")
        }
        else
            node.setAttribute("name", "change")
        if (node.hasChildNodes())
            for (let i = 0; i < node.childElementCount; i++) {
                await setName(node.children[i])
            }
    }

    return (
        <div className="fixed bg-gray-100 top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto h-full">
            <div className="flex w-full h-auto md:h-auto justify-around">
                <div id="test" className="relative bg-white rounded-lg w-[90%] shadow p-2">

                </div>
            </div>
            <div className="flex justify-start gap-4 w-full">
                <button className="w-[20%] mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={send}>Send</button>
                <button className="w-[20%] mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={close}>Close</button>
            </div>
        </div>
    )
}