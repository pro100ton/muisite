import './App.css';
import Box from '@mui/material/Box';
import './AppStyles.css'
import TopBar from "./components/UI/TopBar";
import PageBody from "./components/Bricks/PageBody";


function App() {
    return (
        <Box sx={{backgroundColor: "#255", height: "100vh", width: "100vw"}}>
            <TopBar topBarName="Антоха Шалимов"></TopBar>
            <PageBody></PageBody>
        </Box>
    );
}

export default App;
