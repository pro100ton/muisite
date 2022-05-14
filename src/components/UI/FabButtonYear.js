import React from 'react';
import {Fab, Grid} from "@mui/material";

function FabButtonYear(props) {
    // Potential props for single button:
    // 1. value; 2. selectedYear; 3. onClickHandler
    return (
        <Fab
            value={props.fabValue}
            onClick={props.onClickHandler}
            color={props.selectedYear === props.fabValue ? "primary" : "inherit"}
            variant="extended"
            sx={{m: 1}}> {props.fabValue}
        </Fab>
    );
}

export default FabButtonYear;