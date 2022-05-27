import React from 'react';
import {Fab} from "@mui/material";

type Props = {
    link: string,
    color: string,
    label: string,
    icon: React.ReactNode
}

const FabButtonContact:React.FC<Props> = props => {
    return (
        <Fab
            href={props.link}
            sx={{
                backgroundColor: props.color,
                m:1
            }}
            aria-label={props.label}>
            {props.icon}
        </Fab>
    );
}

export default FabButtonContact;