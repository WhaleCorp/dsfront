import { makeAutoObservable } from "mobx";
import { request } from "../../Helpers/Requests";

export default class MonitorStore {
    constructor(user) {
        makeAutoObservable(this)
        this.user = user
    }
    user
    monitors = []

    async getMonitorsRequest() {
        await fetch("https://localhost:7296/Monitor/GetMonitors", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : this.user.getToken
            },
        }).then(response => response.json())
            .then(json => this.monitors = json)
            .catch(error => console.error(error))
    }

    get getMonitors() {
        return this.monitors;
    }

}