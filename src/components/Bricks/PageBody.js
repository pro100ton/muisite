import {Fragment, React, useState} from 'react';
import {Grid} from "@mui/material";
import YearSelector from "./YearSelector";
import InfoCard from "../UI/InfoCard";
import rtiLogo from "../../media/logo_with_rti_v2 (1).png";
import aspLogo from "../../media/AspLabs.jpg"
import iwLogo from "../../media/iw.png"
import Box from '@mui/material/Box';

const yearLogoMap = {
    2018: aspLogo,
    2019: rtiLogo,
    2020: iwLogo,
    2021: iwLogo,
    2022: iwLogo
}

function PageBody(props) {
    const [sliderValue, setSliderValue] = useState(2018)

    const logo = yearLogoMap[sliderValue];

    function handleSelectYear(event, newValue) {
        setSliderValue(+event.currentTarget.value)
    }

    return (
        <Fragment>
            <Grid container spacing={2} columns={{xs: 1, sm: 2, md: 2}} rowSpacing={3} sx={{p:2}}>
                <Grid item xs={1} sm={2} md={2}>
                    <YearSelector
                        onClickHandler={handleSelectYear}
                        selectedYear={sliderValue}
                    ></YearSelector>
                </Grid>
                <Grid item xs={1} sm={2} md={2}>
                    <Box sx={{
                        height: "50px",
                        backgroundImage:
                            `linear-gradient(to bottom, rgba(255,255,255,0) 10%, rgba(255,255,255,1)),
                           url(${logo})`,
                        backgroundPosition: "center",
                        backgroundSize: "auto 100%",
                        backgroundRepeat: "no-repeat",
                    }}
                    ></Box>
                </Grid>
                <Grid item xs={1} sm={2} md={1}>

                    <InfoCard selectedYear={sliderValue}></InfoCard>
                </Grid>
                <Grid item xs={1} sm={2} md={1}>
                    <InfoCard selectedYear={sliderValue}></InfoCard>
                    <InfoCard selectedYear={sliderValue}></InfoCard>
                    <InfoCard selectedYear={sliderValue}></InfoCard>
                    <InfoCard selectedYear={sliderValue}></InfoCard>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default PageBody;