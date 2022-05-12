import {React, useState} from 'react';
import {Grid} from "@mui/material";
import YearSelector from "./YearSelector";
import InfoCard from "../UI/InfoCard";

function PageBody(props) {
    const [sliderValue, setSliderValue] = useState(2018)

    function handleSelectYear(event, newValue) {
        setSliderValue(+event.currentTarget.value)
    }

    return (
        <Grid container spacing={2} columns={{xs: 1, sm: 2, md: 2}} rowSpacing={3}
              style={{'padding': '10px 10px 10px 10px'}}>
            <Grid item xs={12} sm={12} md={12}>
                <YearSelector
                    onClickHandler={handleSelectYear}
                    selectedYear={sliderValue}
                ></YearSelector>
            </Grid>
            <Grid item xs={1} sm={2} md={2}>
                <InfoCard selectedYear={sliderValue}></InfoCard>
            </Grid>
            <Grid item xs={1} sm={2} md={2}>
                <InfoCard selectedYear={sliderValue}></InfoCard>
            </Grid>
        </Grid>
    );
}

export default PageBody;