import { EducationSegment } from "./EducationSegment"
import { useState } from "react"

function Education() {
    const [segmentIds, setSegmentIds] = useState([0]);

    const addDiv = () => {
        setSegmentIds([...segmentIds, segmentIds.length]);
    }

    // const removeDiv = () => {
        
    // }

    return <div>
        <h1>Education</h1>
        {segmentIds.map((id) => (
            <EducationSegment key={id} />
        ))}
        <button onClick={addDiv}>Add education</button>
    </div>
}

export { Education }