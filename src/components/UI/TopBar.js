import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import AppBarButton from "./AppBarButton";
import {useNavigate} from 'react-router-dom';

function TopBar(props) {
    const navigate = useNavigate();

    function handleClick(route) {
        navigate(route);
    }

    return (
        <AppBar position="relative">
            <Toolbar sx={{m: "auto"}}>
                <AppBarButton onClick={()=> {handleClick("/about");}} label="About" xs="flex" md="flex"></AppBarButton>
                <AppBarButton onClick={()=> {handleClick("/work");}} label="Work" xs="flex" md="flex" ></AppBarButton>
                <AppBarButton onClick={()=> {handleClick("/life");}} label="Life" xs="flex" md="flex"></AppBarButton>
                <AppBarButton onClick={()=> {handleClick("/contacts");}} label="Contacts" xs="none" md="flex"></AppBarButton>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;