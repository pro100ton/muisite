import './App.css';
import Box from '@mui/material/Box';
import './AppStyles.css'
import TopBar from "./components/UI/TopBar";
import PageBody from "./components/Bricks/PageBody";
import ebalo from './media/AspLabs.jpg'
import {Fragment} from "react";

function App() {
    return (
        <Box>
            <TopBar topBarName="Антоха Шалимов"></TopBar>
            <PageBody></PageBody>
        </Box>
    );
}

export default App;
