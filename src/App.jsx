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

function App() {
    return <>
        <Header />
        <div className="grid">
            <h1>Education</h1>
            <Education />
            <h1>Work History</h1>
            <WorkHistory />
            <h1>Skills</h1>
            <Skills />
        </div>
    </>
}

export default App