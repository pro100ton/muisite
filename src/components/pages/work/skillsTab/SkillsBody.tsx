import React, {Fragment} from 'react';
import {Grid} from "@mui/material";
import aspLogo from "../../../../media/ASP_logo.png"
import rtiLogo from "../../../../media/RTI_logo.png"
import nppktLogo from "../../../../media/NPPKT_logo.png"
import iwLogo from "../../../../media/IW_logo.png"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

function SkillsBody() {
    const [aspTabValue, setAspTabValue] = React.useState(0)
    const hadnleAspTabChange = (event: React.SyntheticEvent, newTabValue: number) => {
        setAspTabValue(newTabValue)
    }
    let aspTabRenderElement: React.ReactNode;
    if (aspTabValue === 0){
        aspTabRenderElement = <Typography>Kek</Typography>
    } else {
        aspTabRenderElement = <Typography>Kok</Typography>
    }
    return (
        <Fragment>
            <Grid container
                  spacing={1}
                  columns={{xs: 1, sm: 2, md: 2, lg: 2}}
                  rowSpacing={2}
                  padding={1}
                  sx={{
                      m: -0.5,
                      pl: {lg: "20%", md: "4%", sm: "4%", xs: "4%"},
                      pr: {lg: "20%", md: "4%", sm: "4%", xs: "4%"},
                      // backgroundColor: "green"
                  }}
            >
                <Grid item xs={1} sm={1} md={1}>
                    kek
                </Grid>
                <Grid item xs={1} sm={1} md={1}>
                    kik
                </Grid>
            </Grid>
            <Grid container
                  spacing={1}
                  columns={{xs: 2, sm: 2, md: 4, lg: 4}}
                  rowSpacing={2}
                  padding={1}
                  sx={{
                      m: -0.5,
                      pl: {lg: "20%", md: "4%", sm: "4%", xs: "4%"},
                      pr: {lg: "20%", md: "4%", sm: "4%", xs: "4%"},
                      // backgroundColor: "red"
                  }}
            >
                <Grid item xs={1} sm={1} md={1} lg={1} padding={1} justifyContent={"center"} alignItems={"center"}
                      display={"flex"}>
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
                        src={aspLogo}>
                    </Box>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} padding={1} justifyContent={"center"} alignItems={"center"}
                      display={"flex"}>
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
                        src={nppktLogo}>
                    </Box>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} padding={1} justifyContent={"center"} alignItems={"center"}
                      display={"flex"}>
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
                        src={rtiLogo}>
                    </Box>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} padding={1} justifyContent={"center"} alignItems={"center"}
                      display={"flex"}>
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
                        src={iwLogo}>
                    </Box>
                </Grid>
            </Grid>
            <Grid container
                  spacing={1}
                  columns={{xs: 1, sm: 2, md: 2, lg: 2}}
                  rowSpacing={2}
                  padding={1}
                  sx={{
                      m: -0.5,
                      pl: {lg: "20%", md: "4%", sm: "4%", xs: "4%"},
                      pr: {lg: "20%", md: "4%", sm: "4%", xs: "4%"},
                      backgroundColor: "#e1f7f7"
                  }}
            >
                <Grid item xs={1} sm={1} md={1} padding={1}>
                    <Box sx={{maxWidth: 500}}>
                        <Typography variant="h3" gutterBottom component="div" style={{fontWeight: 600}}>
                            ASP Labs
                        </Typography>
                        <Typography variant="h5" gutterBottom component="div">
                            Cyber security company
                        </Typography>
                        <Typography variant="caption" gutterBottom component="div">
                            Development of a comprehensive solution to ensure information security, tailored to the
                            specifics of industrial enterprises.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={1} sm={1} md={1}>
                    <Box sx={{maxWidth: 500}}>
                        <Tabs value={aspTabValue} onChange={hadnleAspTabChange} aria-label="disabled tabs example">
                            <Tab label="Company"/>
                            <Tab label="My work"/>
                        </Tabs>
                    </Box>
                    <Box sx={{pt:1, pb:1}}>
                        <Grid container>
                            {aspTabRenderElement}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default SkillsBody;