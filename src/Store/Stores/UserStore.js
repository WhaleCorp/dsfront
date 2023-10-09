import { makeAutoObservable } from "mobx"
import { request } from "../../Helpers/Requests"
import Cookies from "js-cookie"

export default class UserStore {
    constructor() {
        makeAutoObservable(this)
    }

    token = Cookies.get('token') || " "
    text = "Sign In"||"jasbd"
    status = 400

    async signIn(login, pass) {
        await request("Auth/SignIn", "POST", { login: login, password: pass }).then((result) => {
            result.json().then(result => {
                if (result.token !== "") {
                    this.token = "Bearer " + result.token
                    Cookies.set('token', 'Bearer ' + result.token, { expires: 1 / 24 })
                    this.status = 200
                }
                else {
                    alert("Incorrect password or login")
                }
            })
        })
    }

    

    setText() {
        if (this.text === "Sign In") {
            this.text = "Sign Out"
        }
        else {
            this.text = "Sign In"
        }
        console.log(this.text)
    }

    logOut() {
        this.token = ""
        Cookies.remove('token')
        console.log("Token")
    }

    signUp(user) {
        request("User/SignUp", "POST", user).then((result) => {
            this.status = result.status
        })
    }

    get getText() {
        return this.text
    }

    get getRedirectLogin() {
        return this.status
    }

    get getToken() {
        return this.token
    }

    get getStatus() {
        return this.status
    }
}