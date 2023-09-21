import { makeAutoObservable } from "mobx";
import { request } from "../../Helpers/Requests";
import UserStore from "./UserStore";

export default class MonitorStore {
    constructor(user) {
        makeAutoObservable(this)
        this.user = user
    }
    user
    monitors = []

    getMonitors() {
        request('Monitor/All', 'GET', "", this.user.getTekon()).json().then((result) => this.monitors = result)
    }

}