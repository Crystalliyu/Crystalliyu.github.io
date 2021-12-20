import React from "react";
import {Body, PageBody} from "../../styles/CommonStyles";
import HeaderBar from "../layout/HeaderBar";
import JobHunter from '../../assets/jobHunter.png';
import JobHunterHome from '../../assets/jobHunter-Homepage.png';
import JobHunterNearby from '../../assets/jobHunter-nearby.png';
import JobHunterFavorite from '../../assets/jobHunter-favorites.png';
import onlineShop from '../../assets/onlineShop.png';
import {Route, Routes, useNavigate} from 'react-router-dom';

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
        <PageBody>
            <HeaderBar/>
            <Body>
                <Routes>
                    <Route path={'/'} element={
                        <>
                            <h1><u style={{cursor:'pointer'}} onClick={() => navigate('./job-hunter')}>JobHunter - AWS based Job Recommendation System</u></h1>
                            <h3>Job Hunter is a job recommendation system which based on AWS, provides company and position informations retrieved from GitHub API for users to search and apply jobs.</h3>
                            <img src={JobHunter}/>

                            <h1><u style={{cursor:'pointer'}}>Spring and Hibernate based Shopping System</u></h1>
                            <h3>This shopping system is a web application for users to shop and order items online.</h3>
                            <img src={onlineShop}/>
                        </>
                    }/>
                    <Route path={'/job-hunter'} element={JobHunterDetail}/>
                </Routes>
            </Body>
        </PageBody>
    )
}