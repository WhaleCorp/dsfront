export class Template {
    MainText: string = "Text";
    Tables: TableModel[] = [];
}

export class TableModel {
    Id: number = 0;
    Name: string = "Header";
    Rows: RowModel[] = [new RowModel(1)];
    constructor(id: number) {
        this.Id = id;
    }
}

export class RowModel {
    Id: number;
    Title: string = "TitleT";
    Description: string = "DescriptionD";
    constructor(id: number) {
        this.Id = id;
    }
}