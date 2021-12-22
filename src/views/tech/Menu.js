import {StackMenu, SubStackMenu} from "../../styles/TechStyles";
import React from "react";
import {ThemeProvider} from "styled-components";
import {ThemeContext} from "../../styles/Theme";

export default function Menu(props) {

    const handleClick = e => {
        props.onChange(e.key);
    };

    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <ThemeProvider theme={theme}>
                    <StackMenu
                        onClick={handleClick}
                        style={{ width: 300, paddingTop:'2rem'}}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        <SubStackMenu key="sub1" title="Frontend">
                            <StackMenu.ItemGroup key="g1" title="Framework">
                                <StackMenu.Item key="1">React</StackMenu.Item>
                                <StackMenu.Item key="2">Angular</StackMenu.Item>
                            </StackMenu.ItemGroup>
                            <StackMenu.ItemGroup key="g2" title="Language">
                                <StackMenu.Item key="3">JS</StackMenu.Item>
                                <StackMenu.Item key="4">TS</StackMenu.Item>
                                <StackMenu.Item key="5">CSS</StackMenu.Item>
                                <StackMenu.Item key="6">HTML</StackMenu.Item>
                            </StackMenu.ItemGroup>
                        </SubStackMenu>
                        <SubStackMenu key="sub2" title="Backend">
                            {/*<StackMenu.Item key="5">Option 5</StackMenu.Item>*/}
                            {/*<StackMenu.Item key="6">Option 6</StackMenu.Item>*/}
                            {/*<SubStackMenu key="sub3" title="Submenu">*/}
                            {/*    <StackMenu.Item key="7">Option 7</StackMenu.Item>*/}
                            {/*    <StackMenu.Item key="8">Option 8</StackMenu.Item>*/}
                            {/*</SubStackMenu>*/}
                        </SubStackMenu>
                        <SubStackMenu key="sub4" title="Algorithm">
                            {/*<StackMenu.Item key="9">Leetcode</StackMenu.Item>*/}
                            {/*<StackMenu.Item key="10">Option 10</StackMenu.Item>*/}
                            {/*<StackMenu.Item key="11">Option 11</StackMenu.Item>*/}
                            {/*<StackMenu.Item key="12">Option 12</StackMenu.Item>*/}
                        </SubStackMenu>
                    </StackMenu>
                </ThemeProvider>)}
        </ThemeContext.Consumer>
    )
}