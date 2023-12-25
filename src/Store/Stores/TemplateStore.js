import { makeAutoObservable, toJS } from "mobx";
import { Template, RowModel, TableModel } from "../../Models/Template.ts";
import { request } from "../../Helpers/Requests.js";
import Cookies from "js-cookie";

export default class TemplateStore {
    constructor() {
        makeAutoObservable(this)
    }

    state = 0
    module = []
    openAdd = false
    id = 0
    code = ""
    template
    orientation = "horizontal"
    ads

    async postDataToDsPAge(data) {
        await fetch("https://localhost:7296/Monitor/PostDataToDSPage", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': Cookies.get("token"),
            },
            body: JSON.stringify(data),
        }).then(response => console.log(response))
        .catch((error)=>console.log(error))
    }

    async postSendAds(){
        await request("Monitor/PostAddAds","POST",{ads:this.ads,orientation:this.orientation},Cookies.get("token")).then((result)=>{
            console.log(result.json())
        })
    }

    async getMonitorData(code){
        await request("Monitor/GetData?code="+code,"GET")
        .then((response)=>response.json())
        .then((json)=>this.template=json.data)
        .catch((error)=>console.log(error))
        document.getElementById("userTemplate").innerHTML = this.template
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

    setOrientation(orientation){
        this.orientation = orientation;
    }

    setAds(ads){
        this.ads = ads
    }

    get getCode(){
        return this.code
    }

    get getTemplate(){
        return this.template
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