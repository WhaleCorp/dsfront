import { makeAutoObservable } from "mobx"
import { request } from "../../Helpers/Requests"
import Cookies from "js-cookie"

export default class UserStore {
    constructor() {
        makeAutoObservable(this)
    }

    token = Cookies.get('token') || " "
    role = Cookies.get('role') || " "
    text = "Sign In" || "jasbd"
    status = 400
    columnNames = ["First name", "Second name", "Email", "Phone number", "Monitors"]
    users = []

    async signIn(login, pass) {
        await request("Auth/SignIn", "POST", { login: login, password: pass }).then((result) => {
            result.json().then(result => {
                if (result.token !== "") {
                    console.log(result)
                    this.token = "Bearer " + result.token
                    Cookies.set('token', 'Bearer ' + result.token, { expires: 1 / 24 })
                    Cookies.set('role', result.role, { expires: 1 / 24 })
                    this.status = 200
                }
                else {
                    alert("Incorrect password or login")
                }
            })
        })
    }

    async linkMonitor(code) {
        await request("Monitor/PutLinkMonitorToUser?code=" + code, "GET", null, Cookies.get("token")).then((result) => {
            console.log(result)
            if (result.status === 200) {
                this.status = 200
            }
        })
    }

    async getAllUsers() {
        await request("User/GetAllUser", "GET", null, Cookies.get("token")).then((result) => {
            result.json().then(result => {
                this.users = result
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
        Cookies.remove('role')
        this.role = ""
        console.log("Token")
    }

    signUp(user) {
        request("User/SignUp", "POST", user).then((result) => {
            this.status = result.status
        })
    }

    get getStatus() {
        return this.status
    }

    get getRole() {
        console.log(this.role)
        return this.role
    }

    get getUsers() {
        return this.users
    }

    get getColumnNames() {
        return this.columnNames
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
}