import './App.css';
import {Card, CardActions, CardContent, CardMedia, Chip, Fab, Grid, Slider, Stack} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Fragment} from "react";
import ebalo from './media/photo_2022-04-20_10-57-20.jpg'
import {useState} from "react";
import './AppStyles.css'


function App() {
    const [sliderValue, setSliderValue] = useState(2018)

    function handleSelectYear(event, newValue) {
        setSliderValue(+event.currentTarget.value)
    }

    const aspCard = (
        <Fragment>
            <CardContent>
                <h1>ASP labs</h1>
                <p>Аудитор ИБ</p>
            </CardContent>
        </Fragment>
    )

    const rtiCard = (
        <Fragment>
            <CardContent>
                <h1>РТИ</h1>
                <p>Хрен пойми кто</p>
            </CardContent>
        </Fragment>
    )

    const infoWatchCardJun = (
        <Fragment>
            <CardContent>
                <h1>Infowatch</h1>
                <p>Разработчик стажер</p>
            </CardContent>
        </Fragment>
    )

    const infoWatchCardMiddle = (
        <Fragment>
            <CardContent>
                <h1>Infowatch</h1>
                <p>Разработчик</p>
            </CardContent>
        </Fragment>
    )

    const infoWatchCardSenior = (
        <Fragment>
            <CardContent>
                <h1>Infowatch</h1>
                <p>Тимлид команды разработки</p>
            </CardContent>
        </Fragment>
    )


    return (
        <Box sx={{backgroundColor: "#255", height: "100vh", width: "100vw"}}>
            <AppBar position="relative">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Антоха Шалимов
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 2 }} rowSpacing={3} style={{'padding': '10px 10px 10px 10px'}}>
                <Grid item xs={12} sm={12} md={12}>
                    <Box display="flex" justifyContent="center">
                        <Fab value={2018} onClick={handleSelectYear}
                             color={sliderValue === 2018 ? "primary" : "inherit"} variant="extended"
                             sx={{m: 1}}>2018</Fab>
                        <Fab value={2019} onClick={handleSelectYear}
                             color={sliderValue === 2019 ? "primary" : "inherit"} variant="extended"
                             sx={{m: 1}}>2019</Fab>
                        <Fab value={2020} onClick={handleSelectYear}
                             color={sliderValue === 2020 ? "primary" : "inherit"} variant="extended"
                             sx={{m: 1}}>2020</Fab>
                        <Fab value={2021} onClick={handleSelectYear}
                             color={sliderValue === 2021 ? "primary" : "inherit"} variant="extended"
                             sx={{m: 1}}>2021</Fab>
                        <Fab value={2022} onClick={handleSelectYear}
                             color={sliderValue === 2022 ? "primary" : "inherit"} variant="extended"
                             sx={{m: 1}}>2022</Fab>
                    </Box>
                </Grid>
                <Grid item xs={1} sm={2} md={2}>
                    {sliderValue === 2018 && <Card variant="outlined">{aspCard}</Card>}
                    {sliderValue === 2019 && <Card variant="outlined">{rtiCard}</Card>}
                    {sliderValue === 2020 && <Card variant="outlined">{infoWatchCardJun}</Card>}
                    {sliderValue === 2021 && <Card variant="outlined">{infoWatchCardMiddle}</Card>}
                    {sliderValue === 2022 && <Card variant="outlined">{infoWatchCardSenior}</Card>}
                </Grid>
                <Grid item xs={1} sm={2} md={2}>
                    {sliderValue === 2018 && <Card variant="outlined">{aspCard}</Card>}
                    {sliderValue === 2019 && <Card variant="outlined">{rtiCard}</Card>}
                    {sliderValue === 2020 && <Card variant="outlined">{infoWatchCardJun}</Card>}
                    {sliderValue === 2021 && <Card variant="outlined">{infoWatchCardMiddle}</Card>}
                    {sliderValue === 2022 && <Card variant="outlined">{infoWatchCardSenior}</Card>}
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;
