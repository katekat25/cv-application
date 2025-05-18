import { EditableInput } from "./EditableInput";
import { useState } from "react"

function List({ className }) {
    const [listItems, setListItems] = useState(
        [{ content: "Click to edit", id: crypto.randomUUID() },
        { content: "Click to edit", id: crypto.randomUUID() },
        { content: "Click to edit", id: crypto.randomUUID() }]
    )

    const addLi = () => {
        const newItem = {
            content: "Click to edit",
            id: crypto.randomUUID(),
        };
        setListItems([...listItems, newItem]);
    };

    const removeLi = (index) => {
        const newList = [...listItems];
        newList.splice(index, 1);
        setListItems(newList);
    }

    const list = listItems.map((item, index) => (
        <li key={item.id}>
            <EditableInput value={item.content} bullet={false} className={className} />
            <button onClick={() => removeLi(index)}>Remove entry</button>
        </li>
    ));

    return <>
        <ul>
            {list}
        </ul>
        <button onClick={addLi}>Add entry</button>
    </>
}

export { List }