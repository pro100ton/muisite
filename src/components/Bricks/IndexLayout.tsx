import React, {Fragment} from 'react';
import TopBar from "../UI/TopBar";

type Props = {
    children?: React.ReactNode
}

function IndexLayout({children}: Props) {
    return (
        <Fragment>
            <TopBar/>
            <Fragment>
                {children}
            </Fragment>
        </Fragment>
    );
}

export default IndexLayout;