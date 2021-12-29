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
import {ThemeContext, themes} from '../../styles/Theme';
import {ThemeProvider} from "styled-components";

export default function HeadBar(props) {
    const navigate = useNavigate();

    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <ThemeProvider theme={theme}>
                    <AdminHeader>
                        <Row vp={'center'}>
                            <Avatar src={Profile} style={{width:'50px', height:'50px'}}/>
                            <Name>Yuqing Li</Name>
                        </Row>
                        <Row vp={'center'}>
                            <Tab isSelected={props.selectedKey === 'home'} onClick={() => navigate("/")}>Home</Tab>
                            <Tab isSelected={props.selectedKey === 'about'} onClick={() => navigate("/about")}>About Me</Tab>
                            <Tab isSelected={props.selectedKey === 'project'} onClick={() => navigate("/projects")}>Projects</Tab>
                            <Tab isSelected={props.selectedKey === 'personal'} onClick={() => navigate("/personal")}>Personal</Tab>
                            {/*<Tab isSelected={props.selectedKey === 'blog'} onClick={() => navigate("/tech-blog")}>Blog</Tab>*/}
                            <Switch
                                checkedChildren={<Moon />}
                                unCheckedChildren={<Sun />}
                                style={{marginRight:'1rem'}}
                                checked={theme === themes.dark}
                                onChange={toggleTheme}
                            />
                        </Row>
                    </AdminHeader>
                </ThemeProvider>
            )}
        </ThemeContext.Consumer>
    )
}