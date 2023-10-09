import { makeAutoObservable, toJS } from "mobx";
import { Template, RowModel, TableModel } from "../../Models/Template.ts";
import { request } from "../../Helpers/Requests.js";

export default class TemplateStore {
    constructor(user) {
        makeAutoObservable(this)
        this.user = user
    }

    user
    state = 0
    module = []
    openAdd = false
    id = 0
    code = ""

    async postDataToDsPAge(data) {
        await fetch("http://localhost:5296/Monitor/PostDataToDSPage?code=" + this.code, {
            method: "POST",

            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain',
                'Authorization': this.user.getToken,

            },
            body: JSON.stringify(data)
        }).then(response => console.log(response.status))
    }

    setCode = (code) => {
        console.log(code)
        this.code = code
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