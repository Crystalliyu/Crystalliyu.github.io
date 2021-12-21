import React from "react";
import {Header, Tab} from "../../styles/HomeStyles";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
    const navigate = useNavigate();
    return (
        <Header>
            <Tab onClick={() => navigate("/")}>Home</Tab>
            <Tab onClick={() => navigate("/about")}>About Me</Tab>
            <Tab onClick={() => navigate("/projects")}>Projects</Tab>
            <Tab onClick={() => navigate("/personal")}>Personal</Tab>
            <Tab onClick={() => navigate("/tech-blog")}>Blog</Tab>
        </Header>
    )
}