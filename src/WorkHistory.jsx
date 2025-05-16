import { WorkHistorySegment } from "./WorkHistorySegment"
import { useState } from "react"

function WorkHistory() {
    const [entries, setEntries] = useState([{ id: crypto.randomUUID() }]);

    const addDiv = () => {
        const newDiv = { content: <WorkHistorySegment />, id: crypto.randomUUID() };
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
        <div className="work-list">
            {entries.map((entry) => (
                <div className="entries" key={entry.id}>
                    <WorkHistorySegment />
                    <button onClick={addDiv}>Add work</button>
                    <button onClick={() => removeDiv(entry.id)} disabled={entries.length === 1}>Remove work</button>
                </div>
            ))}
        </div>
    </div>

}

export { WorkHistory }