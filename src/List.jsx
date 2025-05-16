import { EditableInput } from "./EditableInput";
import { useState } from "react"

function List({ className }) {
    const [listItems, setListItems] = useState(
        [{ content: "Example 1", id: crypto.randomUUID() },
        { content: "Example 2", id: crypto.randomUUID() },
        { content: "Example 3", id: crypto.randomUUID() }]
    )

    const addLi = () => {
        const newItem = {
            content: "Click to edit",
            id: crypto.randomUUID(),
        };
        setListItems([...listItems, newItem]);
    };

    const list = listItems.map((item) => (
        <EditableInput key={item.id} value={item.content} bullet={true} className={className} />
    ));

    return <>
        <ul>
            {list}
        </ul>
        <button onClick={addLi}>Add entry</button>
    </>
}

export { List }