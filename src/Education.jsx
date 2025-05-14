import { EducationSegment } from "./EducationSegment"
import { useState, useRef } from "react"

function Education() {
    let idCount = useRef(0);
    const [segmentIds, setSegmentIds] = useState([idCount]);

    const addDiv = () => {
        idCount.current++;
        console.log("idCount is " + idCount.current);
        setSegmentIds([...segmentIds, idCount.current]);
    }

    const removeDiv = (index) => {
        if (segmentIds.length === 1) {
            return;
        }
        const newArray = [...segmentIds.slice(0, index), ...segmentIds.slice(index + 1)];
        setSegmentIds(newArray);
    }

    return <div className="container">
        <h1>Education</h1>
        <div className="education-list">
            {segmentIds.map((id, index) => (
                <div key={id}>
                    <EducationSegment />
                    <button onClick={addDiv}>Add education</button>
                    <button onClick={() => removeDiv(index)} disabled={segmentIds.length === 1}>Remove education</button>
                </div>
            ))}
        </div>
    </div>

}

export { Education }