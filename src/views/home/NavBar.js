import React from "react";
import {Header, Tab} from "../../styles/HomeStyles";

export const NavBar = () => {
    return (
        <Header>
            <Tab>About Me</Tab>
            <Tab>Projects</Tab>
            <Tab>CV</Tab>
            <Tab>Publication</Tab>
            <Tab>Personal</Tab>
        </Header>
    )
}