import { useRef, useEffect, useState } from "react"

function EditableInput({ value, className, type = "text", multiline = false, bullet = false, ...rest }) {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const growWrapRef = useRef(null);

    const handleBlur = () => {
        setIsFocused(false);
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        if (multiline && growWrapRef.current) {
            growWrapRef.current.dataset.replicatedValue = event.target.value;
        }
    }

    useEffect(() => {
        if (multiline && growWrapRef.current) {
            requestAnimationFrame(() => {
                growWrapRef.current.dataset.replicatedValue = inputValue;
            });
        }
    }, []);

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
                return (
                    < div className="grow-wrap" ref={growWrapRef} >
                        <textarea {...sharedProps} />
                    </div >
                );
            } else {
                return <input type={type} {...sharedProps} ></input>;
            }
        })()}
    </>
}

export { EditableInput }