import React from 'react';
import FabButtonYear from "../../UI/FabButtonYear";
import Box from "@mui/material/Box";
import {workFabTabs} from "../../../constants/WorkData";


type Props = {
    onClickHandler: (event: React.MouseEvent<HTMLElement>) => void,
    selectedYear: string
}

const FabSelector: React.FC<Props> = props => {
    const yearButtonsGroup = []
    for (const year of workFabTabs) {
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