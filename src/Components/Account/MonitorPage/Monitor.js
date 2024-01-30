import { useStores } from "../../../Store/MainStore"

export default function Monitor({ name,orientation }) {
    const { TemplateStore,MonitorStore } = useStores()

    function clicked(e) {
        e.preventDefault()
        TemplateStore.getMonitorData(name)
        TemplateStore.setCode(name)
    }

    function updateMonitorOrientation(e){
        e.preventDefault()
        MonitorStore.putUpdateMonitorOrientation(e.target.value,name)
    }

    return (
        <div className="flex flex-col items-center w-40 md:w-64 bg-white rounded-lg shadow ">
            <div onClick={clicked} className="bg-blue-600 w-full text-center p-1 rounded-t-lg hover:scale-105">
                <h1 className="font-[Poppins] font-bold text-white">{name}</h1>
            </div>
            <img className="w-24" src="/monitor.png" alt="monitor" />

            <div className="mb-3 mx-1 flex gap-2 smm:gap-1 smm:text-sm">
                <label className="w-[50%]" htmlFor="orientation">Orientation:</label>

                <select className="w-[50%]" name="orientation" id="orientation" defaultValue={orientation} onChange={updateMonitorOrientation}>
                    <option value="vertical">Vertical</option>
                    <option value="horizontal">Horizontal</option>
                </select>
            </div>

        </div>
    )
}