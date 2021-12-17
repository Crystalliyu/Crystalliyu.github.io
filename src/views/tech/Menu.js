import {StackMenu, SubStackMenu} from "../../styles/TechStyles";
import {AppstoreOutlined, MailOutlined, SettingOutlined} from "@ant-design/icons";
import React from "react";

export default function Menu() {

    const handleClick = e => {
        console.log('click ', e);
    };

    return (
        <StackMenu
            onClick={handleClick}
            style={{ width: 300, background:'white', boxSizing: 'border-box',
                boxShadow: '0px 4px 4px rgba(226, 229, 234, 0.35)',
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
            <SubStackMenu key="sub1" icon={<MailOutlined />} title="Frontend">
                <StackMenu.ItemGroup key="g1" title="Framework">
                    <StackMenu.Item key="1">React</StackMenu.Item>
                    <StackMenu.Item key="2">Angular</StackMenu.Item>
                </StackMenu.ItemGroup>
                <StackMenu.ItemGroup key="g2" title="Language">
                    <StackMenu.Item key="3">JS</StackMenu.Item>
                    <StackMenu.Item key="4">TS</StackMenu.Item>
                </StackMenu.ItemGroup>
            </SubStackMenu>
            <SubStackMenu key="sub2" icon={<AppstoreOutlined />} title="Backend">
                {/*<StackMenu.Item key="5">Option 5</StackMenu.Item>*/}
                {/*<StackMenu.Item key="6">Option 6</StackMenu.Item>*/}
                {/*<SubStackMenu key="sub3" title="Submenu">*/}
                {/*    <StackMenu.Item key="7">Option 7</StackMenu.Item>*/}
                {/*    <StackMenu.Item key="8">Option 8</StackMenu.Item>*/}
                {/*</SubStackMenu>*/}
            </SubStackMenu>
            <SubStackMenu key="sub4" icon={<SettingOutlined />} title="Algorithm">
                {/*<StackMenu.Item key="9">Leetcode</StackMenu.Item>*/}
                {/*<StackMenu.Item key="10">Option 10</StackMenu.Item>*/}
                {/*<StackMenu.Item key="11">Option 11</StackMenu.Item>*/}
                {/*<StackMenu.Item key="12">Option 12</StackMenu.Item>*/}
            </SubStackMenu>
        </StackMenu>
    )
}