import { EducationSegment } from "./EducationSegment"
import { useState } from "react"

function Education() {
    const [segmentIds, setSegmentIds] = useState([0]);

    const addDiv = () => {
        setSegmentIds([...segmentIds, segmentIds.length]);
    }

    const removeDiv = (index) => {
        if (segmentIds.length === 1) return;
        const newArray = [...segmentIds.slice(0, index), ...segmentIds.slice(index + 1)];
        setSegmentIds(newArray);
    }

    return <div>
        <h1>Education</h1>
        {segmentIds.map((id, index) => (
            <div key={id}>
                <EducationSegment />
                <button onClick={() => removeDiv(index)}>Remove education</button>
            </div>
        ))}
        <button onClick={addDiv}>Add education</button>
    </div>
}

export { Education }