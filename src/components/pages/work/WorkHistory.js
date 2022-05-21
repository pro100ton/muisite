import React from 'react';
import WorkHistoryElement from "../../UI/WorkElements/WorkHistoryElement";
import {workHistory} from "../../../constants/WorkData";

function WorkHistory(props) {
    let workRender = [];
    let startDelay = 0;
    workHistory.forEach((element, index) => {
        workRender.push(
            <WorkHistoryElement
                key={index}
                delay={startDelay}
                companyCard={element.companyCard}
                companyHistory={element.companyHistory}
                companyLogo={element.companyCard.companyLogo}
                color={element.companyColor}
            />
        )
        startDelay += 500
    })


    return (
        <>
            {workRender}
        </>
    )
}

export default WorkHistory;