import React from "react";
import HeaderBar from "../layout/HeaderBar";
import {Body, PageBody} from "../../styles/CommonStyles";

export default function About(props) {
    return (
        <PageBody>
            <HeaderBar/>
            <Body>
                <h1>About</h1>
                <h3>Hi there! This is Yuqing Li’s home on the web!</h3>
                <h3>I am a second-year Computer Engineering Master’s student at [Tandon School of Engineering](https://engineering.nyu.edu/), [New York University](https://www.nyu.edu/). Before joining NYU, I had my B.E in Electrical Engineering at [Wuhan University of Technology](https://www.whut.edu.cn/).</h3>
                <h3>Currently I am actively seeking a full-time software engineer position starts from Jun 2020.</h3>
                <h3>
                    I have strong skills of objective-oriented design, data structure and algorithm. Proficient in Java and Python programming. A wide range of project experience on web development based on Tomcat, Spring, Hibernate, AWS and React. Experienced in iOS mobile applications development using objective-C.
                </h3>

                <h1>Education</h1>
                <h3>* B.S. in Electrical Engineering, Wuhan University of Technology, Sept 2014 - June 2018</h3>
                <h3>* M.S. in Computer Engineering, New York University, Sept 2018 - May 2020</h3>

                <h1>Technical skills</h1>
                <h3>• Programming Languages: Java, Python, MATLAB, SQL, Objective-C, JavaScript</h3>
                <h3>• Databases and Cloud: MySQL, AWS EC2, AWS Lambda</h3>
                <h3>• Web/Mobile development: Java Servlet, HTML, CSS, React, Firebase, iOS</h3>

                <h1>Work experience</h1>
                <h3>Summer 2018: Software development internship</h3>
                <h3>Tencent Technology</h3>
                <h3>Duties included: design and develop Boodo application, which is an iOS app for reading anime and comic with 900,000 daily active users (DAUs).</h3>
                <h3>Supervisor: Song Wang</h3>
            </Body>
        </PageBody>
    )
}