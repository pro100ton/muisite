import './App.css';
import {Card, CardActions, CardContent, CardMedia, Chip, Grid, Slider, Stack} from "@mui/material";
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

const infoCard = (
    <Fragment>
        <CardContent>
            <h1>Здарова</h1>
            <p>Че пыришься, пёс?</p>
        </CardContent>
        <CardActions>
            <Button size="small">Уйти с позором</Button>
        </CardActions>
    </Fragment>
)

const mediaCard = (
    <Fragment>
        <CardMedia component="img" image={ebalo} alt="ebaloTonicha"/>
    </Fragment>
)


function App() {
    const [sliderValue, setSliderValue] = useState(2018)

    function handleSliderChange(event, newValue) {
        setSliderValue(newValue)
    }

    const yearChips = (
        <Stack direction="row" spacing={1}>
            <Chip label="2018" variant="outlined" onClick={handleSliderChange}/>
            <Chip label="2019" variant="outlined" onClick={handleSliderChange}/>
            <Chip label="2020" variant="outlined" onClick={handleSliderChange}/>
            <Chip label="2021" variant="outlined" onClick={handleSliderChange}/>
            <Chip label="2022" variant="outlined" onClick={handleSliderChange}/>
        </Stack>
    )

    const sliderCard = (
        <Fragment>
            <CardContent sx={{mx: "auto"}}>
                <h1>Select year</h1>
            </CardContent>
            <CardActions sx={{mx: "auto", width: 200}}>
                <Slider
                    sx={{width: 200}}
                    aria-label="Always visible"
                    min={2018}
                    max={2022}
                    defaultValue={2018}
                    step={1}
                    valueLabelDisplay="on"
                    onChange={handleSliderChange}
                />
            </CardActions>
        </Fragment>
    )

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
                <p>Хуй пойми кто</p>
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
        <Fragment>
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
                        pro100ton
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container spacing={2} rowSpacing={3} style={{'padding': '10px 10px 10px 10px'}}>
                {/*<Grid item xs={8}>*/}
                {/*    <Box>*/}
                {/*        <Card variant="outlined">{infoCard}</Card>*/}
                {/*    </Box>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={4}>*/}
                {/*    <Box>*/}
                {/*        <Card variant="outlined">{mediaCard}</Card>*/}
                {/*    </Box>*/}
                {/*</Grid>*/}
                <Grid item xs="auto" minWidth={300}>
                    <Box>
                        <Card variant="outlined">{sliderCard}</Card>
                    </Box>
                </Grid>
                <Grid item xs>
                    {sliderValue === 2018 && <Card variant="outlined">{aspCard}</Card>}
                    {sliderValue === 2019 && <Card variant="outlined">{rtiCard}</Card>}
                    {sliderValue === 2020 && <Card variant="outlined">{infoWatchCardJun}</Card>}
                    {sliderValue === 2021 && <Card variant="outlined">{infoWatchCardMiddle}</Card>}
                    {sliderValue === 2022 && <Card variant="outlined">{infoWatchCardSenior}</Card>}
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default App;
