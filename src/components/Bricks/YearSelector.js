import React from 'react';
import FabButton from "../UI/FabButton";
import Box from "@mui/material/Box";
import ebalo from "../../media/photo_2022-04-20_10-57-20.jpg";

const availableYears = [2018, 2019, 2020, 2021, 2022]

function YearSelector(props) {
    const yearButtonsGroup = []
    for (const year of availableYears) {
        yearButtonsGroup.push(
            <FabButton
                fabValue={year}
                onClickHandler={props.onClickHandler}
                selectedYear={props.selectedYear}
            ></FabButton>
        )
    }
    return (
        <Box display="flex" justifyContent="center">{yearButtonsGroup}</Box>
    );
}

export default YearSelector;