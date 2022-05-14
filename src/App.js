import './App.css';
import './AppStyles.css'
import TopBar from "./components/UI/TopBar";
import WorkBody from "./components/pages/work/WorkBody";
import {Fragment} from "react";

function App() {
    return (
        <Fragment>
            <TopBar topBarName="Антоха Шалимов"></TopBar>
            <WorkBody></WorkBody>
        </Fragment>
    );
}

export default App;
