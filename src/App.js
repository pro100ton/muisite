import './App.css';
import './AppStyles.css'
import TopBar from "./components/UI/TopBar";
import PageBody from "./components/Bricks/PageBody";
import {Fragment} from "react";

function App() {
    return (
        <Fragment>
            <TopBar topBarName="Антоха Шалимов"></TopBar>
            <PageBody></PageBody>
        </Fragment>
    );
}

export default App;
