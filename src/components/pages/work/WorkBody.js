import {Fragment, useState} from 'react';
import {Grid} from "@mui/material";
import FabSelector from "./FabSelector";
import InfoCard from "../../UI/InfoCard";
import rtiLogo from "../../../media/logo_with_rti_v2 (1).png";
import aspLogo from "../../../media/AspLabs.jpg"
import iwLogo from "../../../media/iw.png"
import nppktLogo from "../../../media/nppkt.jpg"
import Box from '@mui/material/Box';
import CardPrototype from "../../UI/CardPrototype";

// const yearLogoMap = {
//     2018: aspLogo,
//     2019: rtiLogo,
//     2020: iwLogo,
//     2021: iwLogo,
//     2022: iwLogo
// }

function WorkBody(props) {
    const [sliderValue, setSliderValue] = useState("History")

    function handleSelectYear(event) {
        setSliderValue(event.currentTarget.value)
    }

    return (
        <Fragment>
            <Grid container spacing={2} columns={{xs: 1, sm: 3, md: 3}} rowSpacing={3} padding={2}>
                <Grid item xs={1} sm={3} md={3}>
                    <FabSelector
                        onClickHandler={handleSelectYear}
                        selectedYear={sliderValue}
                    ></FabSelector>
                </Grid>
            </Grid>
            <Grid container spacing={1} columns={{xs: 1, sm: 3, md: 3}} sx={{
                backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(255, 0, 0, 0.4), rgba(0, 0, 0, 0))",
            }} rowSpacing={3}>
                <Grid item xs={1} sm={1} md={1}>
                    <Box
                        display="flex" justifyContent="center"
                        component="img"
                        sx={{
                            m: "auto",
                            maxHeight: {xs: 100, md: 100},
                            maxWidth: {xs: 250, md: 250},
                        }}
                        alt="ASP labs logo"
                        src={aspLogo}
                    />
                    <Box display="flex" justifyContent="center" sx={{m: "auto", p:1}}> <CardPrototype transparent={true}></CardPrototype> </Box>
                </Grid>
                <Grid item xs={1} sm={2} md={2}>
                    <Box padding={1}> <CardPrototype></CardPrototype> </Box>
                    <Box padding={1}> <CardPrototype></CardPrototype> </Box>
                    <Box padding={1}> <CardPrototype></CardPrototype> </Box>
                </Grid>
            </Grid>
            <Grid container spacing={1} columns={{xs: 1, sm: 3, md: 3}} sx={{
                backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 251, 254, 0.4), rgba(0, 0, 0, 0))",
            }} rowSpacing={3}>
                <Grid item xs={1} sm={1} md={1}>
                    <Box
                        display="flex" justifyContent="center"
                        component="img"
                        sx={{
                            m: "auto",
                            maxHeight: {xs: 100, md: 100},
                            maxWidth: {xs: 250, md: 250},
                        }}
                        alt="ASP labs logo"
                        src={rtiLogo}
                    />
                    <Box display="flex" justifyContent="center" sx={{m: "auto", p:1}}> <CardPrototype transparent={true}></CardPrototype> </Box>
                </Grid>
                <Grid item xs={1} sm={2} md={2}>
                    <Box padding={1}> <CardPrototype></CardPrototype> </Box>
                    <Box padding={1}> <CardPrototype></CardPrototype> </Box>
                    <Box padding={1}> <CardPrototype></CardPrototype> </Box>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default WorkBody;