import React from "react";
import {Background, StackMenu, SubStackMenu} from "../../styles/TechStyles";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import {Column, Row} from "../../styles/CommonStyles";
import {NavBar} from "../home/NavBar";
import ReactNotes from "./ReactNotes";

export default function TechRoad() {
    const handleClick = e => {
        console.log('click ', e);
    };

    return (
        <Background>
            <Column>
                <NavBar/>
                <Row>
                    <StackMenu
                        onClick={handleClick}
                        style={{ width: 256, background:'transparent' }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        <SubStackMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                            <StackMenu.ItemGroup key="g1" title="Item 1">
                                <StackMenu.Item key="1">Option 1</StackMenu.Item>
                                <StackMenu.Item key="2">Option 2</StackMenu.Item>
                            </StackMenu.ItemGroup>
                            <StackMenu.ItemGroup key="g2" title="Item 2">
                                <StackMenu.Item key="3">Option 3</StackMenu.Item>
                                <StackMenu.Item key="4">Option 4</StackMenu.Item>
                            </StackMenu.ItemGroup>
                        </SubStackMenu>
                        <SubStackMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                            <StackMenu.Item key="5">Option 5</StackMenu.Item>
                            <StackMenu.Item key="6">Option 6</StackMenu.Item>
                            <SubStackMenu key="sub3" title="Submenu">
                                <StackMenu.Item key="7">Option 7</StackMenu.Item>
                                <StackMenu.Item key="8">Option 8</StackMenu.Item>
                            </SubStackMenu>
                        </SubStackMenu>
                        <SubStackMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                            <StackMenu.Item key="9">Option 9</StackMenu.Item>
                            <StackMenu.Item key="10">Option 10</StackMenu.Item>
                            <StackMenu.Item key="11">Option 11</StackMenu.Item>
                            <StackMenu.Item key="12">Option 12</StackMenu.Item>
                        </SubStackMenu>
                    </StackMenu>
                    <ReactNotes/>
                </Row>
            </Column>
        </Background>
    )
}