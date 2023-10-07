export default function Monitor({ name }) {
    return (
        <div className="flex flex-col items-center w-40 md:w-64 bg-white rounded-lg shadow hover:scale-105">
            <div className="bg-blue-600 w-full text-center p-1 rounded-t-lg">
                <h1 className="font-[Poppins] font-bold text-white">{name}</h1>
            </div>
            <img className="w-24" src="/monitor.png" alt="monitor" />
        </div>
    )
}