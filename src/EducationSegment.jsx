import { EditableInput } from "./EditableInput"

function EducationSegment() {
    return <div className="education">
    <EditableInput type="text" value="Washington University in St. Louis" className="education-item" />
    <EditableInput type="text" value="St. Louis, MO, USA" className="education-item" />
    <p>Attended:</p> 
    <EditableInput type="text" value="2018-2022" className="education-item attended" />
    <p>GPA:</p>
    <EditableInput type="text" value="3.8" className="education-item gpa" />
    <p>Achievements:</p>
    <EditableInput type="text" value="The Awesome Award" className="education-item awards" />
    <p>Relevant coursework:</p>
    <EditableInput value="Humanities 101" multiline={true} className="education-item coursework" />
    </div>
}

export { EducationSegment }
