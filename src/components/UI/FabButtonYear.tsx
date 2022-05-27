import React from 'react';
import {Fab} from "@mui/material";

type Props = {
    fabValue: string,
    onClickHandler: (event: React.MouseEvent<HTMLElement>) => void,
    selectedYear: string
}

const FabButtonYear:React.FC<Props> = props => {
    // Potential props for single button:
    // 1. value; 2. selectedYear; 3. onClickHandler
    const clickFab = (event: React.MouseEvent<HTMLButtonElement>):void => {
        props.onClickHandler(event)
    }
    const clickTest = (event: React.MouseEvent<HTMLElement>):void => {
        console.log(event.currentTarget.innerText)
    }
    return (
        <Fab
            value={props.fabValue}
            onClick={clickFab}
            color={props.selectedYear === props.fabValue ? "primary" : "inherit"}
            variant="extended"
            sx={{m: 1}}> {props.fabValue}
        </Fab>
    );
}

export default FabButtonYear;