import { useState } from "react"

function EditableInput({ value, className, type = "text", multiline = false, bullet = false, ...rest }) {
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
        {(() => {
            if (bullet) {
                return <li>
                    <input type={type} {...sharedProps}></input>
                </li>;
            } else if (multiline) {
                return <textarea {...sharedProps} />;
            } else {
                return <input type={type} {...sharedProps} ></input>;
            }
        })()}
    </>
}

export { EditableInput }