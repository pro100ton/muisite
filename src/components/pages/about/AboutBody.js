import React from 'react';
import TypeAnimationText from "../../UI/TypeAnimationText";
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import ebalo from "../../../media/photo_2022-04-20_10-57-20.jpg"

function AboutBody(props) {
    return (
        <Grid container spacing={2} columns={{xs: 1, sm: 6, md: 12}} rowSpacing={3} sx={{p: 2}}>
            <Grid item xs={1} sm={4} md={8}>
                <Box sx={{
                    height: "500px",
                    backgroundColor: "white",
                    backgroundImage:
                        `radial-gradient(circle, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 1) 50%), url(${ebalo})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}


                ></Box>
            </Grid>
            <Grid item xs={1} sm={2} md={4}>
                <Box height="100%"
                     display="flex"
                     justifyContent="center"
                     flexDirection="column">
                   <TypeAnimationText animationText="Very good developer"/>
                </Box>
            </Grid>

        </Grid>
    );
}

export default AboutBody;