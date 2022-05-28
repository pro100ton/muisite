import React, {Fragment} from 'react';
import {Grid} from "@mui/material";
import aspLogo from "../../../../media/AspLabs.jpg"
import Box from "@mui/material/Box";

function SkillsBody() {
    return (
        <Fragment>
            <Grid container spacing={2} columns={{xs: 1, sm: 2, md: 2}} rowSpacing={3} padding={2} sx={{pl:"20%", pr: "20%"}}>
                <Grid item xs={1} sm={1} md={1}>
                    kek
                </Grid>
                <Grid item xs={1} sm={1} md={1}>
                    kik
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={{xs: 1, sm: 2, md: 4, lg: 4}} rowSpacing={3} padding={2} sx={{pl:"20%", pr: "20%"}}>
                <Grid item xs={1} sm={1} md={1} lg={1}>
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
                        src={aspLogo}>
                    </Box>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1}>
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
                        src={aspLogo}>
                    </Box>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1}>
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
                        src={aspLogo}>
                    </Box>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1}>
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
                        src={aspLogo}>
                    </Box>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default SkillsBody;