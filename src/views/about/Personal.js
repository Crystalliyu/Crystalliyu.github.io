import {Body, PageBody} from "../../styles/CommonStyles";
import React from "react";
import HeaderBar from "../layout/HeaderBar";
import travel1 from '../../assets/travel_1.png';
import travel2 from '../../assets/travel_2.png';
import travel3 from '../../assets/travel_3.png';
import travel4 from '../../assets/travel_4.jpg';
import {ThemeProvider} from "styled-components";
import {ThemeContext} from "../../styles/Theme";
import {ProjectRow} from "../../styles/ProjectStyles";

export default function Personal() {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <ThemeProvider theme={theme}>
                    <PageBody>
                        <HeaderBar selectedKey={'personal'}/>
                        <Body>
                            <p style={{fontSize:'20px', fontWeight:'bold'}}>
                                I am a kind-hearted person and have a good view on life. I enjoy sharing things and talking to people. In my spare time, I have a wide range of hobbies to relax myself, like painting, K-pop dancing, light music, traveling and writing something on the social media.
                            </p>
                            <ProjectRow style={{marginBottom:'20px'}}>
                                <img src={travel1} style={{width:'49%'}}/>
                                <img src={travel2} style={{width:'49%'}}/>
                            </ProjectRow>
                            <ProjectRow>
                                <img src={travel3} style={{width:'49%'}}/>
                                <img src={travel4} style={{width:'49%'}}/>
                            </ProjectRow>
                        </Body>
                    </PageBody>
                </ThemeProvider>
            )}
        </ThemeContext.Consumer>
    )
}