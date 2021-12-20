import React from "react";
import {Background} from "../../styles/TechStyles";
import {Column, Paper, Row} from "../../styles/CommonStyles";
import {Route, Routes} from "react-router-dom";
import Menu from "./Menu";
import DownloadLoading from "../../data/react/DownloadLoading";
import LoadImage from "../../data/react/LoadImage";
import Catalogue from "./Catalogue";
import HeaderBar from "../layout/HeaderBar";
import Scroll from "../../data/react/ScrollToElement";

export default function TechBlog() {
    return (
        <Column width={'100%'} height={'100vh'} style={{overflowY:'scroll', backgroundColor:'#fef8f3'}}>
            <HeaderBar/>
            <Row width={'100%'} height={'100%'}>
                <Menu/>
                <Paper>
                    <Routes>
                        <Route path="/" element={<Catalogue/>} />
                        <Route path="/loading-while-download" element={<DownloadLoading/>} />
                        <Route path="/load-image" element={<LoadImage/>} />
                        <Route path="/scroll" element={<Scroll/>} />
                    </Routes>
                </Paper>
            </Row>
        </Column>
    )
}