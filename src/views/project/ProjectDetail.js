import JobHunterHome from "../../assets/jobHunter-Homepage.png";
import JobHunterNearby from "../../assets/jobHunter-nearby.png";
import JobHunterFavorite from "../../assets/jobHunter-favorites.png";
import OnlineShopHome from "../../assets/onlineShop-homepage.png";
import OnlineShopContent from "../../assets/onlineShop-content.png";
import UnicornMain from "../../assets/unicorn-home.png";
import UnicornPreview from "../../assets/unicorn-preview.png";
import UnicornGenerate from "../../assets/unicorn_generate.png";
import UnicornUpload from "../../assets/unicorn_upload.png";
import UseCaseGallery from "../../assets/use_case_gallery.png";
import UseCaseDemo from "../../assets/use_case_demo.png";
import SinguIMGDashboard from "../../assets/singuimg_dashboard.png";
import SinguIMGFile from "../../assets/singuimg_classification.png";
import SinguIMGLabel from "../../assets/singuimg_label.png";
import SinguIMGModel from "../../assets/singuimg_model.png";
import SinguIMGPostProcessing from "../../assets/singuimg_postprocessing.png";
import SinguIMGEdit from "../../assets/singuimg_edit.png";
import MTRDashboard from "../../assets/mtr_dashboard.png";
import React from "react";
import {ImageBox, ProjectImg, ProjectRow} from "../../styles/ProjectStyles";

const JobHunterDetail = (
    <>
        <h1>JobHunter - AWS based Job Recommendation System</h1>
        <h3>Job Hunter is a job recommendation system which based on AWS, provides company and position informations retrieved from GitHub API for users to search and apply jobs.<hr/></h3>
        <h3>Front End:</h3>
        <h3>
            <li>
                Developed an interactive web page for users to search and apply positions (HTML, CSS,
                JavaScript, AJAX)
            </li>
            <li>
                Used favorite records to provide personalized position recommendation
            </li>
        </h3>
        <h3>Back End:</h3>
        <h3>
            <li>Created three Java servlets with RESTful APIs to handle HTTP requests and responses</li>
            <li>Used MySQL database on Amazon RDS to store position data fetched from Github API</li>
            <li>Used MonkeyLearn API to extract keywords from description of positions</li>
            <li>Designed algorithms (e.g., content-based recommendation) to implement job recommendation</li>
        </h3>
        <ProjectRow>
            <ImageBox><ProjectImg src={JobHunterHome}/></ImageBox>
            <ImageBox><ProjectImg src={JobHunterNearby}/></ImageBox>
            <ImageBox><ProjectImg src={JobHunterFavorite}/></ImageBox>
        </ProjectRow>
    </>
)

const OnlineShoppingDetail = (
    <>
        <h1>Spring and Hibernate based Shopping System</h1>
        <h3>This shopping system is a web application for users to shop and order items online.<hr/></h3>
        <h3>
            <li>Built an online store using Spring MVC and Web Flow with functionalities including item listing, searching, and ordering.</li>
            <li>Simplified and streamlined database operations with Hibernate.</li>
            <li>Used AWS Lambda and AWS Step Functions to implement a fulfillment system.</li>
            <li>Implemented security workflow based on Spring Security in-memory authentication and JDBC authentication mechanisms</li>
        </h3>
        <hr/>
        <ProjectRow>
            <ImageBox><ProjectImg src={OnlineShopHome}/></ImageBox>
            <ImageBox><ProjectImg src={OnlineShopContent}/></ImageBox>
        </ProjectRow>
    </>
)

const Unicorn = (
    <>
        <h1>Unicorn</h1>
        <h3>Unicorn is a web application which based on ReactJS, allow user to generate their own synthetic data.<hr/></h3>
        <h3>
            <li>Built an synthetic data generation platform with functionalities including empty template upload, format customization in page level and field level, data preview and data generation.</li>
            <li>Implement the application using React JS, develop the web page using styled-components and Ant design.</li>
        </h3>
        <hr/>
        <ProjectRow>
            <ImageBox><ProjectImg src={UnicornUpload}/></ImageBox>
            <ImageBox><ProjectImg src={UnicornMain}/></ImageBox>
            <ImageBox><ProjectImg src={UnicornPreview}/></ImageBox>
            <ImageBox><ProjectImg src={UnicornGenerate}/></ImageBox>
        </ProjectRow>
    </>
)

const Gallery = (
    <>
        <h1>Use Case Gallery</h1>
        <h3>This is a use-cases demonstration platform.<hr/></h3>
        <h3>
            <li>Developed the web application to present the use cases and use case details.</li>
            <li>Implement the application using React and Typescript, develop the web page using styled-components and Material-UI.</li>
        </h3>
        <hr/>
        <ProjectRow>
            <ImageBox><ProjectImg src={UseCaseGallery}/></ImageBox>
            <ImageBox><ProjectImg src={UseCaseDemo}/></ImageBox>
        </ProjectRow>
    </>
)

const SinguIMG = (
    <>
        <h1>SinguIMG - React based Model Self-training System</h1>
        <h3>SinguIMG is a web application which allow use to train their own model from scratch.<hr/></h3>
        <h3>
            <li>Develop and maintain a comprehensive self-training system with over 30 web pages to help engineers and customers build their own ML pipelines.</li>
            <li>Built highly reusable UI components with styled-components and Ant design.</li>
            <li>Implemented Redux library for global data store and used React-Router library for routing.</li>
        </h3>
        <hr/>
        <ProjectRow>
            <ImageBox><ProjectImg src={SinguIMGDashboard}/></ImageBox>
            <ImageBox><ProjectImg src={SinguIMGFile}/></ImageBox>
            <ImageBox><ProjectImg src={SinguIMGLabel}/></ImageBox>
            <ImageBox><ProjectImg src={SinguIMGPostProcessing}/></ImageBox>
            <ImageBox><ProjectImg src={SinguIMGModel}/></ImageBox>
            <ImageBox><ProjectImg src={SinguIMGEdit}/></ImageBox>
        </ProjectRow>
    </>
)

const MTRPlatform = (
    <>
        <h1>MTR - React based File Identification System</h1>
        <h3>This is a material test report identification platform.<hr/></h3>
        <h3>
            <li>Work as project manager with 8 developers to design and implement a documentation management system from requirement definition till successful user acceptance.</li>
            <li>Built highly reusable UI components with styled-components and Ant design.</li>
            <li>Implement the theme customization in order to switch between light theme and dark theme dynamically.</li>
            <li>Implemented Redux library for global data store and used React-Router library for routing.</li>
        </h3>
        <hr/>
        <ProjectRow>
            <ImageBox><ProjectImg src={MTRDashboard}/></ImageBox>
        </ProjectRow>
    </>
)
export {JobHunterDetail, OnlineShoppingDetail, Unicorn, Gallery, SinguIMG, MTRPlatform}