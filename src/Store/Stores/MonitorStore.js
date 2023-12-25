import { makeAutoObservable } from "mobx";
import { request } from "../../Helpers/Requests";
import Cookies from "js-cookie";

export default class MonitorStore {
    constructor() {
        makeAutoObservable(this)
    }
    monitors = []
    checkingUser

    async getMonitorsRequest() {
        await request("Monitor/GetMonitors", "GET", null, Cookies.get("token"))
            .then(response => response.json())
            .then(json => this.monitors = json)
            .catch(error => console.error("getMonitorRequest",error))
    }

    async getUserMonitors(id) {
        this.checkingUser=id
        await request("Monitor/GetMonitor?userid="+id, "GET", null, Cookies.get("token"))
            .then(response => response.json())
            .then(json => this.monitors = json)
            .catch(error => console.error(error))
            
    }

    async putUpdateMonitorOrientation(orientation,code){
        await request("Monitor/PutUpdateOrientation","PUT",{orientation:orientation,code:code},Cookies.get("token"))
        .then(response=>response.text())
        .then(text=>console.log(text))
        .catch(error=>console.error("putUpdateMonitorOrientation",error))
    }

    get getMonitors() {
        return this.monitors;
    }

}