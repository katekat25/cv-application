import { EditableInput } from "./EditableInput"

function Education() {
    return <div className="education">
        <EditableInput type="text" value="Washington University in St. Louis" className="education-item place" />
        <EditableInput type="text" value="St. Louis, MO, USA" className="education-item location" />
        <div className="tab">
            <div className="descriptor">Attended:</div>
            <EditableInput type="text" value="2018-2022" className="education-item attended" />
        </div>
        <div className="tab">
            <div className="descriptor">GPA: </div>
            <EditableInput type="text" value="3.8" className="education-item gpa" />
        </div>
        <div className="tab">
            <div className="descriptor">Achievements: </div>
            <EditableInput type="text" value="The Awesome Award" className="education-item achievements" />
        </div>
        <div className="descriptor coursework-descriptor">Relevant coursework: </div>
        <EditableInput value="Humanities 101" multiline={true} className="education-item coursework" />
    </div>
}

export { Education }
