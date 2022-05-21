import React from 'react';
import WorkHistoryElement from "../../UI/WorkElements/WorkHistoryElement";
import {workHistory} from "../../../constants/WorkData";

function WorkHistory(props) {
    let workRender = [];

    workHistory.forEach((element, index) => {
        workRender.push(
            <WorkHistoryElement
                key={index}
                companyCard={element.companyCard}
                companyHistory={element.companyHistory}
                companyLogo={element.companyCard.companyLogo}
                color={element.companyColor}
            />
        )
    })


    return (
        <>
            {workRender}
        </>
    )
}

export default WorkHistory;