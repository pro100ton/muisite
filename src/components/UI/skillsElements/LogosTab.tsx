import React from 'react';
import {Grid} from "@mui/material";
import LogoElemet from "./LogoElement";

type Props = {
    logos: string[]
}

function LogosTab({logos}: Props) {
    let logosGrid: React.ReactNode[] = [];
    for (let logo of logos) {
        logosGrid.push(
            <Grid item xs={1} sm={1} md={1} lg={1} padding={1} justifyContent={"center"} alignItems={"center"}
                  display={"flex"}>
                <LogoElemet logoImage={logo}/>
            </Grid>
        )
    }
    return (
        <Grid container
              spacing={1}
              columns={{xs: 2, sm: 2, md: 4, lg: 4}}
              rowSpacing={2}
              padding={1}
              sx={{
                  m: -0.5,
                  pl: {lg: "20%", md: "4%", sm: "4%", xs: "4%"},
                  pr: {lg: "20%", md: "4%", sm: "4%", xs: "4%"},
              }}
        >
            {logosGrid}
        </Grid>
    );
}

export default LogosTab;