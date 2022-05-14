import React from 'react';
import FabButtonYear from "../../UI/FabButtonYear";
import Box from "@mui/material/Box";

const availableYears = ["History", "Skills", "Portfolio"]

function FabSelector(props) {
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

export default FabSelector;