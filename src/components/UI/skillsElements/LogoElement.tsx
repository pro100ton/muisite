import React from 'react';
import Box from "@mui/material/Box";

type Props = {
    logoImage: string
}

const LogoElement:React.FC<Props> = props => {
    return (
        <Box
            component="img"
            justifyContent={"center"}
            alignItems={"center"}
            padding={1}
            sx={{
                maxHeight: {xs: 100, md: 100},
                maxWidth: {xs: 200, md: 200},
            }}
            alt="ASP labs logo"
            src={props.logoImage}/>

    );
}

export default LogoElement;