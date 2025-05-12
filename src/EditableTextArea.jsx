import { useState } from "react"

function EditableTextArea(props) {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState(props.value);

    const handleBlur = () => {
        setIsFocused(false);
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    return <div>
        <textarea
            value={inputValue}
            onChange={handleInputChange}
            className={isFocused ? props.className : props.className + " unfocused"}
            onBlur={handleBlur}
            onFocus={() => setIsFocused(true)} />
    </div>
}

export { EditableTextArea }