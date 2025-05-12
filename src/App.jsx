//todo:
//add localstorage
//add print function
//css styling
//make education, skills, and workhistory duplicable
//icon upload?

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
    <Education />
    <WorkHistory />
    <Skills />
    </>
}

export default App