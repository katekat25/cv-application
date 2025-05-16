import { EducationSegment } from "./EducationSegment"
import { useState } from "react"

function Education() {
    const [entries, setEntries] = useState([{ id: crypto.randomUUID() }]);

    const addDiv = () => {
        const newDiv = { content: <EducationSegment />, id: crypto.randomUUID() };
        setEntries([...entries, newDiv]);
    }

    const removeDiv = (id) => {
        if (entries.length === 1) {
            return;
        }
        const newArray = entries.filter((entry) => entry.id !== id); //it's mutating entries, could that be a problem?
        setEntries(newArray);
    }

    return <div className="container">
        <div className="education-list">
            {entries.map((entry) => (
                <div className="entries" key={entry.id}>
                    <EducationSegment />
                    <button onClick={addDiv}>Add education</button>
                    <button onClick={() => removeDiv(entry.id)} disabled={entries.length === 1}>Remove education</button>
                </div>
            ))}
        </div>
    </div>

}

export { Education }