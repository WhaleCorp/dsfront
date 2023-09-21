import { makeAutoObservable } from "mobx"
import { request } from "../../Helpers/Requests"

export default class UserStore {
    constructor() {
        makeAutoObservable(this)
    }

    token = ""
    status

    async signIn(login, pass) {
        await (await request("Auth/SignIn", "POST", { login: login, password: pass })).json().then((result) => {
            console.log(result)
            if (result.token !== "") {
                this.token = result.token
            }
            else {
                alert("Incorrect password or login")
            }
        })
    }

    logOut() {
        this.token = ""
        console.log("Token")
    }

    signUp(user) {
        request("User/SignUp", "POST", user).then((result) => {
            this.status = result.status
        })
    }

    get getRedirectLogin() {
        return this.status
    }

    get getToken() {
        return this.token
    }
}