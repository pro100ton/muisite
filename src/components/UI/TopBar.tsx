import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import AppBarButton from "./AppBarButton";
import {useNavigate} from 'react-router-dom';

function TopBar() {
    const navigate = useNavigate();

    // Function with argument
    const handleClick = (route: string):void => {
        navigate(route);
    };

    // Function without argument
    const printKek = (): void => {
        console.log("kek")
    }

    return (
        <AppBar position="relative">
            <Toolbar sx={{m: "auto"}}>
                <AppBarButton
                    onButtonClick={handleClick.bind("/about")}
                    onKekClick={printKek}
                    label="About"
                    locationName="/about"
                />
                <AppBarButton
                    onButtonClick={() => { handleClick("/work"); }}
                    onKekClick={printKek}
                    label="Work"
                    locationName="/work"
                />
                <AppBarButton
                    onButtonClick={() => { handleClick("/contacts"); }}
                    onKekClick={printKek}
                    label="Links"
                    locationName="/contacts"
                />
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;