import { useStores } from "../../../Store/MainStore"
import { useEffect } from "react"
import { useObserver } from "mobx-react"

export default function UserTable({ colNames, data }) {
    const { UserStore,MonitorStore } = useStores()

    function openMonitor( data) {
        MonitorStore.getUserMonitors(data.id)
    }

    useEffect(() => {
        UserStore.getAllUsers()
    }, [])

    return useObserver(()=> (
        <table className="w-full text-sm text-left text-gray-500 mt-5">
            <thead
                className="text-s text-gray-700 uppercase bg-gray-200 sticky top-0">
                <tr>
                    {UserStore.getColumnNames.map((element, key) => {
                        return (<th key={key} scope="col" className="px-6 py-3">
                            {element}
                        </th>)
                    })}
                </tr>
            </thead>
            <tbody className="w-full">
                {UserStore.getUsers.length !== 0 ? UserStore.getUsers.map((row, key) => {
                    return (
                        <tr key={key}
                            className="bg-white border-b hover:bg-gray-100 cursor-pointer" onClick={(e) => {e.preventDefault();openMonitor( row)}}>
                            <td className="px-6 py-4">
                                {row.firstName}
                            </td>
                            <td className="px-6 py-4">
                                {row.lastName}
                            </td>
                            <td className="px-6 py-4">
                                {row.email}
                            </td>
                            <td className="px-6 py-4">
                                {row.phoneNumber}
                            </td>
                            <td className="px-6 py-4">
                                {row.count}
                            </td>
                        </tr>
                    )
                }) : null}

            </tbody>
        </table>
    ))
}