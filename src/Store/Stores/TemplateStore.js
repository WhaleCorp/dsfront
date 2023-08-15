import { makeAutoObservable } from "mobx";
import { Template, RowModel, TableModel } from "../../Models/Template.ts";

export default class TemplateStore {
    constructor() {
        makeAutoObservable(this)
    }

    template = { header: "Text" }
    tables = []
    rows = []

    addTable = () => {
        this.tables.push({ id: this.tables.length + 1, header: "text" })
    }

    addRow = (tableId) => {
        if (this.rows.length < tableId)
            this.rows.push([{ id: this.rows.length + 1, title: "title", description: "description" }])
        else
            this.rows[tableId-1].push({ id: this.rows[tableId-1].length + 1, title: "title", description: "description" })
    }

    get getRows() {
        console.log(this.rows)
        return this.rows
    }

    get getTables() {
        console.log(this.tables)
        return this.tables
    }

}