import React from 'react';
import WorkHistoryElement from "../../../UI/workElements/WorkHistoryElement";
import {workHistory} from "../../../../constants/WorkData";

function WorkHistory() {
    let workRender: React.ReactNode[] = [];
    let startDelay = 0;
    workHistory.forEach((element, index) => {
        workRender.push(
            <WorkHistoryElement
                key={index}
                delay={startDelay}
                companyCard={element.companyCard}
                companyHistory={element.companyHistory}
                color={element.companyColor}
                companyColor={element.companyColor}/>
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