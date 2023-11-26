
import Cookies from "js-cookie"
import WorkPlace from "./Account/MonitorPage/WorkPlace"
import ErrorPage from "./ErrorPage"
import Nav from "./Nav"

export default function WorkPage() {
    return (
        <div>
            <Nav/>
            {Cookies.get("token") !== ""?<WorkPlace/>:<ErrorPage/>}
        </div>
    )
}