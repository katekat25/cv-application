import { useState } from "react"

function EditableInput({ value, className, type="text", multiline=false, ...rest }) {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState(value);

    const handleBlur = () => {
        setIsFocused(false);
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const sharedProps = {
        value: inputValue,
        onChange: handleInputChange,
        onBlur: handleBlur,
        onFocus: () => setIsFocused(true),
        className: isFocused ? className : `${className} unfocused`,
        ...rest,
    }

    return <>
        {multiline ? (
            <textarea {...sharedProps} />
        ) : (
            <input type={type} {...sharedProps} />
        )}
    </>
}

export { EditableInput }