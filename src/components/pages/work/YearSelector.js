import React from 'react';
import FabButtonYear from "../../UI/FabButtonYear";
import Box from "@mui/material/Box";

const availableYears = [2018, 2019, 2020, 2021, 2022]

function YearSelector(props) {
    const yearButtonsGroup = []
    for (const year of availableYears) {
        yearButtonsGroup.push(
            <FabButtonYear
                key={year}
                fabValue={year}
                onClickHandler={props.onClickHandler}
                selectedYear={props.selectedYear}
            ></FabButtonYear>
        )
    }
    return (
        <Box display="flex" justifyContent="center">{yearButtonsGroup}</Box>
    );
}

export default YearSelector;