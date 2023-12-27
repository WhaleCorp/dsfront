import { makeAutoObservable } from "mobx";
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
        await request("Monitor/PostDataToDSPage","POST",data,Cookies.get("token") )
        .then(response => console.log(response))
        .catch((error)=>console.log(error))
    }

    async postSendAds(){
        await request("Monitor/PostAddAds","POST",{ads:this.ads,orientation:this.orientation},Cookies.get("token")).then((result)=>{
            console.log(result)
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