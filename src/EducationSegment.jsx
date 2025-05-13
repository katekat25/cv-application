import { EditableInput } from "./EditableInput"

function EducationSegment() {
    return <div className="education">
    <EditableInput type="text" value="Washington University in St. Louis" />
    <EditableInput type="text" value="St. Louis, MO, USA" />
    <p>Attended:</p> 
    <EditableInput type="text" value="2018-2022" />
    <p>GPA:</p>
    <EditableInput type="text" value="3.8" />
    <p>Achievements:</p>
    <EditableInput type="text" value="The Awesome Award" />
    <p>Relevant coursework:</p>
    <EditableInput value="Humanities 101" multiline={true} />
    </div>
}

export { EducationSegment }
