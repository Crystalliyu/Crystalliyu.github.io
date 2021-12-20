import React from "react";
import {Tab} from "../../styles/HomeStyles";
import {useNavigate} from "react-router-dom";
import {AdminHeader} from "../../styles/HeaderBarStyles";

export default function HeadBar(props) {
    const navigate = useNavigate();

    return (
        <AdminHeader>
            <Tab onClick={() => navigate("/")}>Home</Tab>
            <Tab onClick={() => navigate("/about")}>About Me</Tab>
            <Tab onClick={() => navigate("/projects")}>Projects</Tab>
            <Tab onClick={() => navigate("/personal")}>Personal</Tab>
            <Tab onClick={() => navigate("/tech-blog")}>Tech road</Tab>
        </AdminHeader>
    )
}