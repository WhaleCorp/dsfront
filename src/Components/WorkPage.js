import { getCookie } from "../Helpers/Cookies"
import WorkPlace from "./Account/MonitorPage/WorkPlace"
import ErrorPage from "./ErrorPage"

export default function WorkPage() {
    return (
        <div>
            {getCookie("token") !== ""?<WorkPlace/>:<ErrorPage/>}
        </div>
    )
}