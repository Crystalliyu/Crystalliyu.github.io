import React from "react";
import HeaderBar from "../layout/HeaderBar";
import {Body, PageBody} from "../../styles/CommonStyles";
import {ThemeContext} from "../../styles/Theme";
import {ThemeProvider} from "styled-components";

export default function About() {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <ThemeProvider theme={theme}>
                    <PageBody>
                        <HeaderBar selectedKey={'about'}/>
                        <Body>
                            <h1>About</h1>
                            <h3>Hi there! This is Yuqing Li!</h3>
                            <h3>I am a second-year Computer Engineering Master’s student at <a onClick={() => window.open("https://engineering.nyu.edu/")}>Tandon School of Engineering</a>, <a onClick={() => window.open("https://www.nyu.edu/")}>New York University</a>. Before joining NYU, I had my B.E in Electrical Engineering at <a onClick={() => window.open("https://www.whut.edu.cn/")}>Wuhan University of Technology</a>.</h3>
                            <h3>
                                I have strong skills of objective-oriented design, data structure and algorithm. Proficient in Java and Python programming. A wide range of project experience on web development based on Tomcat, Spring, Hibernate, AWS and React. Experienced in iOS mobile applications development using objective-C.
                            </h3>

                            <h1>Education</h1>
                            <h3>
                                <li>B.S. in Electrical Engineering, Wuhan University of Technology, Sept 2014 - June 2018</li>
                                <li>M.S. in Computer Engineering, New York University, Sept 2018 - May 2020</li>
                            </h3>
                            <h1>Technical skills</h1>
                            <h3>
                                <li>Programming Languages: Java, Python, MATLAB, SQL, Objective-C, JavaScript</li>
                                <li>Databases and Cloud: MySQL, AWS EC2, AWS Lambda</li>
                                <li>Web/Mobile development: React, HTML, Redux, Styled-components, Java Servlet, CSS, iOS, Android</li>
                            </h3>

                            <h1>Work experience</h1>
                            <h2>Software development internship (Summer 2018)</h2>
                            <h3><a onClick={() => window.open("https://www.tencent.com/en-us")}>Tencent Technology</a></h3>
                            <h3>Duties included: design and develop Boodo application, which is an iOS app for reading anime and comic with 900,000 daily active users (DAUs).</h3>
                            <h3>Supervisor: Song Wang</h3>
                            <hr/>
                            <h2>Software development (July 2020 - Present)</h2>
                            <h3><a onClick={() => window.open("https://singularitysystems.com/")}>Singularity Systems Inc.</a></h3>
                            <h3>Duties included: design and develop web applications, including image model training platform, use cases demonstration platform, ML models management system and synthetic data generation platform.</h3>
                        </Body>
                    </PageBody>
                </ThemeProvider>
            )}
        </ThemeContext.Consumer>
    )
}