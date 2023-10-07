import PopUpAddButton from "./PopUpModules/PopUpAddButton";
import Table from "../Templates/Modules/Table/Table";
import Row from "../Templates/Modules/Row";
import { DateTime } from "../Templates/Modules/DateTime";
import Text from "../Templates/Modules/TextRow/Text";
import Header from "../Templates/Modules/Header";
import Space from "../Templates/Modules/Space";
export default function PopUpAdd() {
    return (
        <div className="flex w-full p-4 gap-4">
            <PopUpAddButton text={"Add table"} module={<Table />} />
            <PopUpAddButton text={"Add row"} module={<Row />} />
            <PopUpAddButton text={"Add date"} module={<DateTime />} />
            <PopUpAddButton text={"Add text"} module={<Text/>} />
            <PopUpAddButton text={"Add header"} module={<Header/>} />
            <PopUpAddButton text={"Add space"} module={<Space/>} />
            <PopUpAddButton text={"Add footer"} module={4} />
        </div>
    )
}