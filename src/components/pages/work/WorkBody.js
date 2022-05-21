import {Fragment, useState} from 'react';
import {Grid} from "@mui/material";
import FabSelector from "./FabSelector";
import WorkHistory from "./WorkHistory";


function WorkBody(props) {
    // State for storing current selected tab
    const [selectedWorkTab, setselectedWorkTab] = useState("History")

    /**
     * Function for handling FAB tab selection and setting selected tab state to corresponding button value
     * @param event - JS event object
     */
    function handleSelectTab(event) {
        setselectedWorkTab(event.currentTarget.value)
    }

    // Variable will store body component to render depending on selected tab
    let componentToRender;

    if (selectedWorkTab === "History") {
        componentToRender = <WorkHistory/>
    } else if (selectedWorkTab === "Skills" || selectedWorkTab === "Portfolio") {
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