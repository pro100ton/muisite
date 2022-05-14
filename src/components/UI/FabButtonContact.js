import React from 'react';
import {Fab} from "@mui/material";

function FabButtonContact(props) {
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