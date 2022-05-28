import React, {Fragment, useState} from 'react';
import {Grid} from "@mui/material";
import FabSelector from "./FabSelector";
import WorkHistory from "./workTab/WorkHistory";
import SkillsBody from "./skillsTab/SkillsBody";


function WorkBody() {
    // State for storing current selected tab
    const [selectedWorkTab, setselectedWorkTab] = useState("History")

    /**
     * Function for handling FAB tab selection and setting selected tab state to corresponding button value
     * @param event - JS event object
     */
    function handleSelectTab(event: React.MouseEvent<HTMLElement>):void {
        console.log(event.currentTarget.innerText)
        setselectedWorkTab(event.currentTarget.innerText)
    }

    // Variable will store body component to render depending on selected tab
    let componentToRender;

    if (selectedWorkTab === "HISTORY") {
        componentToRender = <WorkHistory/>
    } else if (selectedWorkTab === "SKILLS"){
        componentToRender = <SkillsBody/>
    } else if (selectedWorkTab === "PORTFOLIO") {
        componentToRender = `${selectedWorkTab} page in development`
    } else {
        componentToRender = `${selectedWorkTab} not found`
    }

    return (
        <Fragment>
            <Grid container spacing={2} columns={{xs: 1, sm: 3, md: 3}} rowSpacing={3} padding={2}>
                <Grid item xs={1} sm={3} md={3}>
                    <FabSelector
                        onClickHandler={handleSelectTab}
                        selectedYear={selectedWorkTab}
                    ></FabSelector>
                </Grid>
            </Grid>
            {componentToRender}
        </Fragment>
    );
}

export default WorkBody;