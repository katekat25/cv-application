//todo:
//add localstorage
//add print function
//add delete button to <li>s and other optional bits

//dream todos:
//add dark mode support
//add different templates

import { Sidebar } from "./Sidebar"
import { Header } from "./Header"
import { Education } from "./Education"
import { WorkHistory } from "./WorkHistory"
import { Skills } from "./Skills"
import { EntryList } from "./EntryList"
import { useState } from "react"

function App() {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        isVisible ? setIsVisible(false) : setIsVisible(true);
    }

    return <div className="page">
        <Sidebar toggle={toggleVisibility} />
        <div className="cv-content">
            <Header iconVisibility={isVisible}/>
            <div className="grid">
                <h1>Education</h1>
                <EntryList
                    Component={Education}
                    addLabel="Add education"
                    removeLabel="Remove education"
                    containerClass="container"
                    listClass="education-list"
                />
                <h1>Work History</h1>
                <EntryList
                    Component={WorkHistory}
                    addLabel="Add position"
                    removeLabel="Remove position"
                    containerClass="container"
                    listClass="work-list"
                />
                <h1>Skills</h1>
                <Skills />
            </div>
        </div>

        <div> </div>
    </div>
}

export default App