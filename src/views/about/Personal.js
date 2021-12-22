import {Body, PageBody} from "../../styles/CommonStyles";
import React from "react";
import HeaderBar from "../layout/HeaderBar";
import travel1 from '../../assets/travel_1.png';
import travel2 from '../../assets/travel_2.png';
import travel3 from '../../assets/travel_3.png';
import {ThemeProvider} from "styled-components";
import {ThemeContext} from "../../styles/Theme";

export default function Personal(props) {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <ThemeProvider theme={theme}>
                    <PageBody>
                        <HeaderBar selectedKey={'personal'}/>
                        <Body>
                            <h3>
                                I am a kind-hearted person and have a good view on life. I enjoy sharing things and talking to people. In my spare time, I have a wide range of hobbies to relax myself, like painting, K-pop dancing, light music, traveling and writing something on the social media.
                            </h3>
                            <h1>
                                My travel memories
                            </h1>
                            <img src={travel1}/>
                            <img src={travel2}/>
                            <img src={travel3}/>
                        </Body>
                    </PageBody>
                </ThemeProvider>
            )}
        </ThemeContext.Consumer>
    )
}