// import { useState } from "react"

function EditableTextBox(props) {
    return <div>
        <input type={props.type} value={props.value} className={props.className}/>
        </div>
}

export { EditableTextBox }