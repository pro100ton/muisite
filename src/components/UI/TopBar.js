import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import AppBarButton from "./AppBarButton";
import AppBarCollapsedMenu from "./AppBarCollapsedMenu";

function TopBar(props) {
    return (
        <AppBar position="relative">
            <Toolbar sx={{m:"auto"}}>
                <AppBarButton label="About" xs="flex" md="flex"></AppBarButton>
                <AppBarButton label="Work" xs="flex" md="flex"></AppBarButton>
                <AppBarButton label="Life" xs="flex" md="flex"></AppBarButton>
                <AppBarButton label="Contacts" xs="none" md="flex"></AppBarButton>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;