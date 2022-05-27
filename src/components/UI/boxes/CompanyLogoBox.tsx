import React from 'react';
import Box from "@mui/material/Box";

type Props = {
    companyLogo: string,
}

const CompanyLogoBox:React.FC<Props> = props => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            component="img"
            sx={{
                m: "auto",
                maxHeight: {xs: 100, md: 100},
                maxWidth: {xs: 250, md: 250},
            }}
            alt="ASP labs logo"
            src={props.companyLogo}>
        </Box>
    );
}

export default CompanyLogoBox;