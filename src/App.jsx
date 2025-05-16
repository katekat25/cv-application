//todo:
//add localstorage
//add print function
//consolidate education and work history components
//css styling
//add ability to toggle icon

//dream todos:
//add dark mode support
//add different templates

import { Header } from "./Header"
import { Education } from "./Education"
import { WorkHistory } from "./WorkHistory"
import { Skills } from "./Skills"
import { EntryList } from "./EntryList"

function App() {
    return <>
        <Header />
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
    </>
}

export default App