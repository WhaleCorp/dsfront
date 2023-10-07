import { makeAutoObservable, toJS } from "mobx";
import { Template, RowModel, TableModel } from "../../Models/Template.ts";
import { request } from "../../Helpers/Requests.js";

export default class TemplateStore {
    constructor() {
        makeAutoObservable(this)
    }

    state = 0
    module = []
    openAdd = false
    id = 0
    monitors = []
    token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxIiwibmJmIjoxNjk2NDYxNzk3LCJleHAiOjE2OTY0NjUzOTcsImlhdCI6MTY5NjQ2MTc5NywiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI5NiIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTI5NiJ9.y5G_DPLLetmcrvr8CpbOKEoEfCCmQh28zMvPJcJ1_f0"

    async postDataToDsPAge(data) {
        await fetch("http://localhost:5296/Monitor/PostDataToDSPage", {
            method: "POST",
            Authorization: this.token,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain',

            },
            body: JSON.stringify(data)
        }).then(response => console.log(response.status))
    }

    getMonitors = () => {

    }

    updateOpenAdd = (openAdd) => {
        this.openAdd = openAdd
    }

    updateState = (state) => {
        this.state = state
    }

    updateModule = (module) => {
        this.module.push(module)
    }

    get getMonitors() {
        return this.monitors;
    }

    get getId() {
        this.id += 1
        return this.id
    }

    get getOpenAdd() {
        return this.openAdd
    }

    get getModule() {
        return this.module
    }



    get getState() {
        return this.state
    }


}