import { EditableTextBox } from "./EditableTextBox"
import { EditableTextArea } from "./EditableTextArea.jsx"

function Header() {
    return <div className="header">
        <EditableTextBox type="text" value="Kate Schumacher" className="header-item"/>
        <EditableTextArea placeholder="Professional Summary" className="header-item"/>
        <EditableTextBox type="text" value="katekat25.github.com" className="header-item"/>
        <EditableTextBox type="email" value="kate.schumacher@gmail.com" className="header-item"/>
        <EditableTextBox type="tel" value="(555) 555-5555" className="header-item"/>
        <EditableTextBox type="text" value="123 Pleasant St., Anytown, USA" className="header-item"/>
    </div>
}

export { Header }