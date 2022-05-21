import React from 'react';
import TopBar from "../../UI/TopBar";
import AboutBody from "./AboutBody";

function About(props) {
    return (
        <>
            <TopBar topBarName="Антоха Шалимов"></TopBar>
            <AboutBody/>
        </>
    );
}

export default About;