import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {useLocation} from 'react-router-dom'

type Props = {
    xs?: string;
    md?: string;
    label: string;
    onButtonClick: (route: string) => void;
    onKekClick?: () => void;
    locationName: string;
}

function AppBarButton({xs, md, label, onKekClick, onButtonClick, locationName}: Props) {
    const location = useLocation();
    const locationSelected = location.pathname === locationName;
    let labelColor = locationSelected ? '#00e5ff' : 'inherit';
    // Initializing new function and describing it
    const pressButton = (): void => onButtonClick(locationName);
    return (
        <MenuItem
            // Pass new declared function to onClick handler
            onClick={pressButton}
            // Function without argument can be passed without declaration
            // onClick={onKekClick}
            sx={{
                display: {xs: `${xs}`, md: `${md}`},
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
                {label}
            </Typography>
        </MenuItem>
    );
}

AppBarButton.defaultProps = {
    xs: "flex",
    md: "flex"
}

export default AppBarButton;