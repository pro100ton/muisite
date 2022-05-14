import React from 'react';
import TypeAnimation from "react-type-animation";

function TypeAnimationText(props) {
    return (
        <TypeAnimation
            cursor={props.cursorEnabled}
            sequence={[
                `${props.animationText}`,
                8000,
            ]}
            wrapper="h1"
            repeat={props.repeatTimes}
        />
    );
}

TypeAnimationText.defaultProps = {
    repeatTimes: 1,
    cursorEnabled: false
}

export default TypeAnimationText;