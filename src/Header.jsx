import { EditableInput } from "./EditableInput.jsx"
import { Icon } from "./Icon.jsx"

function Header() {
    return <div className="header">
        <Icon className="icon" />
        <EditableInput type="text" value="Kate Schumacher" className="header-item name"/>
        <EditableInput multiline={true} value="Professional Summary" className="header-item summary"/>
        <EditableInput type="text" value="katekat25.github.com" className="header-item"/>
        <EditableInput type="email" value="kate.schumacher@gmail.com" className="header-item"/>
        <EditableInput type="tel" value="(555) 555-5555" className="header-item"/>
        <EditableInput type="text" value="123 Pleasant St., Anytown, USA" className="header-item"/>
    </div>
}

export { Header }