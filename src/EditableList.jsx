import { useState } from "react"

function EditableList({ className, ...rest }) {
    // const [isFocused, setIsFocused] = useState(false);
    // const [inputValue, setInputValue] = useState(value);
    // const [listItems, setListItems] = useState(["Example 1", "Example 2", "Example 3"])

    // const handleBlur = () => {
    //     setIsFocused(false);
    // }

    // const handleInputChange = (event) => {
    //     setInputValue(event.target.value);
    // }

    // const addLi = () => {

    // }

    // const sharedProps = (index) => ({
    //     type: "text",
    //     value: inputValue,
    //     onChange: handleInputChange,
    //     onBlur: handleBlur,
    //     onFocus: () => setIsFocused(true),
    //     className: isFocused ? className : `${className} unfocused`,
    //     ...rest,
    // })

    // const list = listItems.map((index) => {
    //     <li
    //     key={index}>
    //         <input {...sharedProps}/>
    //     </li>
    // })

    // return <>
    // <ul>
    //     {list}
    // </ul>
    // <button onClick={addLi}>Add entry</button>
    // </>
}

export { EditableList }