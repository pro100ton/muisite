import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

function AppBarButton(props) {
    return (
        <MenuItem sx={{
            display: { xs: `${props.xs}`, md: `${props.md}` },
        }}>
            <Typography
                variant="h6"
                sx={{
                    m: "auto",
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                {props.label}
            </Typography>
        </MenuItem>
    );
}

AppBarButton.defaultProps ={
    xs: "none",
    md: "flex"
}

export default AppBarButton;