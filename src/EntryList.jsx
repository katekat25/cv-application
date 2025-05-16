import { useState } from "react"

function EntryList({ Component, addLabel, removeLabel, listClass, containerClass }) {
    const [entries, setEntries] = useState([{ id: crypto.randomUUID() }]);

    const addEntry = () => {
        setEntries([...entries, { id: crypto.randomUUID() }]);
    }

    const removeEntry = (id) => {
        if (entries.length === 1) return;
        setEntries(entries.filter(entry => entry.id !== id));
    }

    return <div className={containerClass}>
        <div className={listClass}>
            {entries.map((entry) => (
                <div className="entries" key={entry.id}>
                    <Component />
                    <button onClick={addEntry}>
                        {addLabel}
                    </button>
                    <button onClick={() => removeEntry(entry.id)} disabled={entries.length === 1}>
                        {removeLabel}
                    </button>
                </div>
            ))}
        </div>
    </div>

}

export { EntryList }