import React from "react";
import {PageWrapper} from "../../styles/CommonStyles";
import {Description, EmailBtn, LargeText, Left, Right} from "../../styles/HomeStyles";
import {NavBar} from "./NavBar";
import { MailOutlined } from '@ant-design/icons';


export default function Home(props) {
    return (
        <PageWrapper>
            <Left>
                <NavBar/>
                <LargeText>Hi there!<br/>This is Yuqing Li’s home on the web!</LargeText>
                <Description>I’am a <span style={{color:'white'}}>software engineer</span> based in Princeton who loves designing and implementing software applications.</Description>
                <EmailBtn type="primary" icon={<MailOutlined />}>Email me</EmailBtn>
            </Left>
            <Right>
            </Right>
        </PageWrapper>
    )
}