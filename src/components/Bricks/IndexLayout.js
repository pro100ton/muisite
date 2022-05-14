import React, {Fragment} from 'react';
import TopBar from "../UI/TopBar";

function IndexLayout(props) {
    return (
        <Fragment>
            <TopBar topBarName="Антоха Шалимов"></TopBar>
            <Fragment>
                {props.children}
            </Fragment>
        </Fragment>
    );
}

export default IndexLayout;