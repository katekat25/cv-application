// import { useState } from "react"

function EditableTextArea(props) {
    return <div>
        <textarea placeholder={props.placeholder} className={props.className}/>
        </div>
}

export { EditableTextArea }