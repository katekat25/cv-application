import { EditableInput } from "./EditableInput"
import { EditableList } from "./EditableList"

function WorkHistorySegment() {
    return <div className="education">
        <EditableInput type="text" value="Jimmy John's" className="work-item place" />
        <EditableInput type="text" value="St. Louis, MO, USA" className="work-item location" />
        <EditableInput type="text" value="2024-2025" className="work-item attended" />
        <EditableList />
    </div>
}

export { WorkHistorySegment }