import { makeAutoObservable } from "mobx";

export default class ChangerStore {
    constructor() {
        makeAutoObservable(this)
    }
    position = { top: 0, left: 0 }
    id = 11

    setObject(el) {
        console.log(el)
        this.position.top = this.getOffset(el).top
        this.position.left = this.getOffset(el).left
        this.id = el.id
    }

    setId(id) {
        this.id = id
    }

    getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.scrollX,
            top: rect.top + window.scrollY
        };
    }

    get getId() {
        return this.id
    }

    get getPosition() {
        return {
            left: this.position.left,
            top: this.position.top
        }
    }
}