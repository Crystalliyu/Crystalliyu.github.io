import React from "react";
import {Body, PageBody, Row} from "../../styles/CommonStyles";
import HeaderBar from "../layout/HeaderBar";
import JobHunter from '../../assets/jobHunter.png';
import JobHunterHome from '../../assets/jobHunter-Homepage.png';
import JobHunterNearby from '../../assets/jobHunter-nearby.png';
import JobHunterFavorite from '../../assets/jobHunter-favorites.png';
import onlineShop from '../../assets/onlineShop.png';
import unicorn from '../../assets/unicorn.png';
import use_case_gallery from '../../assets/use_case_gallery.png';
import singuIMG from '../../assets/singuIMG.png';
import MTR from '../../assets/MTR.png';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {ThemeProvider} from "styled-components";
import {ThemeContext} from "../../styles/Theme";
import { Card } from 'antd';
import {ProjectRow} from "../../styles/ProjectStyles";

const { Meta } = Card;

const JobHunterDetail = (
    <>
        <h1><u style={{cursor:'pointer'}}>JobHunter - AWS based Job Recommendation System</u></h1>
        <h3>Job Hunter is a job recommendation system which based on AWS, provides company and position informations retrieved from GitHub API for users to search and apply jobs.</h3>
        <h4>
            Front End:

            • Developed an interactive web page for users to search and apply positions (HTML, CSS,
            JavaScript, AJAX)

            • Used favorite records to provide personalized position recommendation

            Back End:

            • Created three Java servlets with RESTful APIs to handle HTTP requests and responses

            • Used MySQL database on Amazon RDS to store position data fetched from Github API

            • Used MonkeyLearn API to extract keywords from description of positions

            • Designed algorithms (e.g., content-based recommendation) to implement job recommendation
        </h4>
        <img src={JobHunterHome}/>
        <img src={JobHunterNearby}/>
        <img src={JobHunterFavorite}/>
    </>
)
export default function Project(props) {
    const navigate = useNavigate();
    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <ThemeProvider theme={theme}>
                    <PageBody>
                        <HeaderBar selectedKey={'project'}/>
                        <Body>
                            <Routes>
                                <Route path={'/'} element={
                                    <ProjectRow>
                                        <Card
                                            hoverable
                                            style={{ width: '49%', marginBottom:'2rem' }}
                                            cover={<img alt="example" src={unicorn} />}
                                            onClick={() => navigate('./')}
                                        >
                                            <Meta title="Unicorn - React based Synthetic Data Generation System" description="Unicorn is a web application which based on ReactJS, allow user to generate their own synthetic data." />
                                        </Card>
                                        <Card
                                            hoverable
                                            style={{ width: '49%', marginBottom:'2rem' }}
                                            cover={<img alt="example" src={use_case_gallery} />}
                                            onClick={() => navigate('./')}
                                        >
                                            <Meta title="Use Case Gallery" description="This is a use-cases demonstration platform." />
                                        </Card>
                                        <Card
                                            hoverable
                                            style={{ width: '49%', marginBottom:'2rem' }}
                                            cover={<img alt="example" src={singuIMG} />}
                                            onClick={() => navigate('./')}
                                        >
                                            <Meta title="SinguIMG - React based Model Self-training System" description="SinguIMG is a web application which allow use to train their own model from scratch." />
                                        </Card>
                                        <Card
                                            hoverable
                                            style={{ width: '49%', marginBottom:'2rem' }}
                                            cover={<img alt="example" src={MTR} />}
                                            onClick={() => navigate('./')}
                                        >
                                            <Meta title="MTR" description="This is a material test report identification platform." />
                                        </Card>
                                        <Card
                                            hoverable
                                            style={{ width: '49%', marginBottom:'2rem' }}
                                            cover={<img alt="example" src={JobHunter} />}
                                            onClick={() => navigate('./job-hunter')}
                                        >
                                            <Meta title="JobHunter - AWS based Job Recommendation System" description="Job Hunter is a job recommendation system which based on AWS, provides company and position information retrieved from GitHub API for users to search and apply jobs." />
                                        </Card>
                                        <Card
                                            hoverable
                                            style={{ width: '49%', marginBottom:'2rem' }}
                                            cover={<img alt="example" src={onlineShop} />}
                                            onClick={() => navigate('./online-shopping')}
                                        >
                                            <Meta title="Spring and Hibernate based Shopping System" description="This shopping system is a web application for users to shop and order items online." />
                                        </Card>
                                    </ProjectRow>
                                }/>
                                <Route path={'/job-hunter'} element={JobHunterDetail}/>
                            </Routes>
                        </Body>
                    </PageBody>
                </ThemeProvider>
                )}
        </ThemeContext.Consumer>
    )
}