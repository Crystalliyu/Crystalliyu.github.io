import React from "react";
import {PageWrapper} from "../../styles/CommonStyles";
import {BtnRow, Description, EmailBtn, LargeText, Left, Right} from "../../styles/HomeStyles";
import {NavBar} from "./NavBar";
import { MailOutlined, DownloadOutlined } from '@ant-design/icons';
import {Avatar} from "antd";


export default function Home(props) {
    return (
        <PageWrapper>
            <Left>
                <NavBar/>
                <LargeText>Hi there!<br/>This is Yuqing Li’s home on the web!</LargeText>
                <Description>I’am a <span style={{color:'white'}}>software engineer</span> based in Princeton who loves designing and implementing software applications.</Description>
                <BtnRow>
                    <EmailBtn type="primary" icon={<MailOutlined />}>Email me</EmailBtn>
                    <DownloadOutlined style={{fontSize:'20px', margin:'0 5px 0 20px', cursor:'pointer'}}/>
                    <span><u style={{fontSize:'20px', cursor:'pointer'}}>Download CV</u></span>
                </BtnRow>
            </Left>
            <Right>
                <Avatar src="https://joeschmoe.io/api/v1/random" />
            </Right>
        </PageWrapper>
    )
}