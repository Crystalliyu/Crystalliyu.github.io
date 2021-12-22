import React from "react";
import {Tab} from "../../styles/HomeStyles";
import {useNavigate} from "react-router-dom";
import {AdminHeader, Name} from "../../styles/HeaderBarStyles";
import {Avatar} from "antd";
import Profile from "../../assets/profile.png";
import {Row} from "../../styles/CommonStyles";
import { Switch } from 'antd';
import {ReactComponent as Moon} from '../../assets/moon.svg';
import {ReactComponent as Sun} from '../../assets/sun.svg';

export default function HeadBar(props) {
    const navigate = useNavigate();

    return (
        <AdminHeader>
            <Row vp={'center'}>
                <Avatar src={Profile} style={{width:'50px', height:'50px'}}/>
                <Name>Yuqing Li</Name>
            </Row>
            <Row vp={'center'}>
                <Tab onClick={() => navigate("/")}>Home</Tab>
                <Tab onClick={() => navigate("/about")}>About Me</Tab>
                <Tab onClick={() => navigate("/projects")}>Projects</Tab>
                <Tab onClick={() => navigate("/personal")}>Personal</Tab>
                <Tab onClick={() => navigate("/tech-blog")}>Blog</Tab>
                <Switch
                    checkedChildren={<Moon />}
                    unCheckedChildren={<Sun />}
                    style={{marginRight:'1rem'}}
                />
            </Row>
        </AdminHeader>
    )
}