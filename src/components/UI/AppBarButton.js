import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {useLocation} from 'react-router-dom'

function AppBarButton(props) {
    const location = useLocation();
    const locationSelected = location.pathname === props.locationName
    let labelColor = locationSelected ? '#00e5ff' : 'inherit'
    return (
        <MenuItem
            onClick={props.onClick}
            sx={{
                display: {xs: `${props.xs}`, md: `${props.md}`},
            }}>
            <Typography
                variant="h6"
                sx={{
                    m: "auto",
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: labelColor,
                    textDecoration: 'none',
                }}
            >
                {props.label}
            </Typography>
        </MenuItem>
    );
}

AppBarButton.defaultProps = {
    xs: "flex",
    md: "flex"
}

export default AppBarButton;