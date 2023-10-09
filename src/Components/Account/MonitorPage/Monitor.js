import { useStores } from "../../../Store/MainStore"

export default function Monitor({ name }) {
    const {TemplateStore} = useStores()

    function clicked(e) {
        e.preventDefault()
        TemplateStore.setCode(name)
    }

    return (
        <div onClick={clicked} className="flex flex-col items-center w-40 md:w-64 bg-white rounded-lg shadow hover:scale-105">
            <div className="bg-blue-600 w-full text-center p-1 rounded-t-lg">
                <h1 className="font-[Poppins] font-bold text-white">{name}</h1>
            </div>
            <img className="w-24" src="/monitor.png" alt="monitor" />
        </div>
    )
}