import { EditableInput } from "./EditableInput"
import { List } from "./List"

function WorkHistory() {
    return <div className="segment">
        <EditableInput type="text" value="Jimmy John's" className="work-item place" />
        <EditableInput type="text" value="St. Louis, MO, USA" className="work-item location" />
        <EditableInput type="text" value="Sandiwch Artist" className="work-item position" />
        <EditableInput type="text" value="2024-2025" className="work-item attended" />
        <List />
    </div>
}

export { WorkHistory }