import React from 'react';
import Box from "@mui/material/Box";

function CompanyLogoBox(props) {
    return (
        <Box
            display="flex" justifyContent="center"
            component="img"
            sx={{
                m: "auto",
                maxHeight: {xs: 100, md: 100},
                maxWidth: {xs: 250, md: 250},
            }}
            alt="ASP labs logo"
            src={props.companyLogo}
        />
    );
}

export default CompanyLogoBox;