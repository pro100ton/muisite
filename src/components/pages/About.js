import React from 'react';
import ebalo from '../../media/photo_2022-04-20_10-57-20.jpg'
import TopBar from "../UI/TopBar";

function About(props) {
    return (
        <>
            <TopBar topBarName="Антоха Шалимов"></TopBar>
            <img src={ebalo}/>
        </>
    );
}

export default About;