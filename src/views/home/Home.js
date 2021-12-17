import React from "react";
import {PageWrapper, Row} from "../../styles/CommonStyles";
import {BtnRow, Description, EmailBtn, InfoRow, LargeText, Left, Right} from "../../styles/HomeStyles";
import {NavBar} from "./NavBar";
import { MailOutlined, DownloadOutlined, EnvironmentFilled, MailFilled, LinkedinFilled, GithubFilled } from '@ant-design/icons';
import Profile from '../../assets/profile.png';
import {Avatar} from "antd";


export default function Home(props) {
    return (
        <PageWrapper>
            <Left>
                <NavBar/>
                <LargeText>Hi there!<br/>This is Yuqing Li’s home on the web!</LargeText>
                <Description>I’am a <span style={{color:'white'}}>software engineer</span> based in Princeton who loves designing and implementing software applications.</Description>
                <BtnRow>
                    <EmailBtn type="primary" icon={<MailOutlined />} onClick={() => window.open('mailto:yl5644@nyu.edu')}>Email me</EmailBtn>
                    <DownloadOutlined style={{fontSize:'20px', margin:'0 5px 0 20px', cursor:'pointer'}}/>
                    <span><u style={{fontSize:'20px', cursor:'pointer'}}><a href={"./Yuqing_Li_CV.pdf"} download target="_blank">Download CV</a></u></span>
                </BtnRow>
            </Left>
            <Right>
                <Avatar src={Profile} style={{width:'150px', height:'150px'}}/>
                <InfoRow><EnvironmentFilled style={{marginRight:'1rem'}}/><span style={{color:'white', fontSize:'16px'}}>Princeton, New Jersey </span></InfoRow>
                <InfoRow><MailFilled style={{marginRight:'1rem'}}/><span style={{color:'white', fontSize:'16px'}}>yl5644@nyu.edu </span></InfoRow>
                <InfoRow><LinkedinFilled style={{marginRight:'1rem'}}/><span style={{color:'white', fontSize:'16px', cursor:'pointer'}}><u onClick={() => window.open('https://www.linkedin.com/in/yuqing-li-0ba9461a2/')}>LinkedIn</u></span></InfoRow>
                <InfoRow><GithubFilled style={{marginRight:'1rem'}}/><span style={{color:'white', fontSize:'16px', cursor:'pointer'}}><u onClick={() => window.open('https://github.com/Crystalliyu')}>Github</u></span></InfoRow>
            </Right>
        </PageWrapper>
    )
}