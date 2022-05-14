import {Fragment, useState} from 'react';
import {Grid} from "@mui/material";
import FabSelector from "./FabSelector";
import InfoCard from "../../UI/InfoCard";
import rtiLogo from "../../../media/logo_with_rti_v2 (1).png";
import aspLogo from "../../../media/AspLabs.jpg"
import iwLogo from "../../../media/iw.png"
import nppktLogo from "../../../media/nppkt.jpg"
import Box from '@mui/material/Box';

const yearLogoMap = {
    2018: aspLogo,
    2019: rtiLogo,
    2020: iwLogo,
    2021: iwLogo,
    2022: iwLogo
}

function WorkBody(props) {
    const [sliderValue, setSliderValue] = useState("History")

    const logo = yearLogoMap[sliderValue];

    function handleSelectYear(event) {
        setSliderValue(event.currentTarget.value)
    }

    return (
        <Fragment>
            <Grid container spacing={2} columns={{xs: 1, sm: 3, md: 3}} rowSpacing={3} sx={{p:2}}>
                <Grid item xs={1} sm={3} md={3}>
                    <FabSelector
                        onClickHandler={handleSelectYear}
                        selectedYear={sliderValue}
                    ></FabSelector>
                </Grid>
                <Grid item xs={1} sm={1} md={1}>
                    <Box
                        display="flex" component="img" justifyContent="center"
                        sx={{
                            m: "auto",
                            maxHeight: { xs: 100, md: 100 },
                            maxWidth: { xs: 250, md: 250 },
                        }}
                        alt="ASP labs logo"
                        src={aspLogo}
                    />
                </Grid>
                <Grid item xs={1} sm={2} md={2}>
                    <InfoCard selectedYear={sliderValue}></InfoCard>
                </Grid>
                <Grid item xs={1} sm={1} md={1}>
                    <Box
                        display="flex" component="img" justifyContent="center"
                        sx={{
                            m: "auto",
                            maxHeight: { xs: 100, md: 100 },
                            maxWidth: { xs: 250, md: 250 },
                        }}
                        alt="ASP labs logo"
                        src={rtiLogo}
                    />
                </Grid>
                <Grid item xs={1} sm={2} md={2}>
                    <InfoCard selectedYear={sliderValue}></InfoCard>
                </Grid>
                <Grid item xs={1} sm={1} md={1}>
                    <Box
                        display="flex" component="img" justifyContent="center"
                        sx={{
                            m: "auto",
                            maxHeight: { xs: 100, md: 100 },
                            maxWidth: { xs: 250, md: 250 },
                        }}
                        alt="ASP labs logo"
                        src={nppktLogo}
                    />
                </Grid>
                <Grid item xs={1} sm={2} md={2}>
                    <InfoCard selectedYear={sliderValue}></InfoCard>
                </Grid>
                <Grid item xs={1} sm={1} md={1}>
                    <Box
                        display="flex" component="img" justifyContent="center"
                        sx={{
                            m: "auto",
                            maxHeight: { xs: 100, md: 100 },
                            maxWidth: { xs: 250, md: 250 },
                        }}
                        alt="ASP labs logo"
                        src={iwLogo}
                    />
                </Grid>
                <Grid item xs={1} sm={2} md={2}>
                    <InfoCard selectedYear={sliderValue}></InfoCard>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default WorkBody;