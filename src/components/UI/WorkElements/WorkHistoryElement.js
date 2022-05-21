import React from 'react';
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import CardPrototype from "../CardPrototype";
import CompanyLogoBox from "../Boxes/CompanyLogoBox";
import {animated, useSpring} from '@react-spring/web'

function WorkHistoryElement(props) {
    const sProps = useSpring({to: {opacity: 1}, from: {opacity: 0}, delay: props.delay})
    const companyHistory = props.companyHistory;
    let companyHistoryRender = [];
    companyHistory.forEach((element, index) => {
        companyHistoryRender.push(
            <Box padding={1} key={index}>
                <CardPrototype
                    cardHeader={element.position}
                    cardMemo={`${element.positionStartDate} - ${element.positionEndDate}`}
                    cardBody={element.positionDescription}
                />
            </Box>
        )
    })
    return (
        <animated.div style={sProps}>
            <Grid container spacing={1} columns={{xs: 1, sm: 3, md: 3}}
                  sx={{backgroundImage: `${props.color}`}}
                  rowSpacing={3}
                  justifyContent={"center"}
                  alignItems={"center"}
            >
                <Grid item xs={1} sm={1} md={1}
                      maxWidth={{
                          lg: 700,
                      }}
                      minWidth={{
                          lg: 500,
                      }}
                >
                    <CompanyLogoBox companyLogo={props.companyCard.companyLogo}/>
                    <Box sx={{m: "auto", p: 1}}>
                        <CardPrototype
                            transparent={true}
                            cardHeader={props.companyCard.companyName}
                            cardMemo={props.companyCard.companyObjective}
                            cardBody={props.companyCard.companyDescription}
                            link={props.companyCard.companySiteLink}
                        />
                    </Box>
                </Grid>
                <Grid item xs={1} sm={2} md={2}
                      maxWidth={{
                          lg: 700,
                      }}
                      minWidth={{
                          lg: 500,
                      }}>
                    {companyHistoryRender}
                </Grid>
            </Grid>
        </animated.div>
    );
}

export default WorkHistoryElement;