import React, {useState} from "react";
import {Column, Paper, Row} from "../../styles/CommonStyles";
import {Route, Routes} from "react-router-dom";
import Menu from "./Menu";
import Catalogue from "./Catalogue";
import HeaderBar from "../layout/HeaderBar";
import {ReactList} from "../../data/list/ReactList";
import {CSSList} from "../../data/list/CSSList";

export default function TechBlog() {
    const [tab, setTab] = useState(1);

    const onMenuChange = (key) => {
        setTab(key);
    }
    return (
        <Column width={'100%'} height={'100vh'} style={{overflowY:'scroll', backgroundColor:'white'}}>
            <HeaderBar/>
            <Row width={'100%'} height={'calc(100% - 5em)'}>
                <Menu onChange={onMenuChange}/>
                <Paper>
                    <Routes>
                        <Route path="/" element={<Catalogue tab={tab}/>} />
                        {ReactList.map((item) =>
                            <Route path={item.path.substring(item.path.lastIndexOf('/'))} element={item.element} />)
                        }
                        {CSSList.map((item) =>
                            <Route path={item.path.substring(item.path.lastIndexOf('/'))} element={item.element} />)
                        }
                    </Routes>
                </Paper>
            </Row>
        </Column>
    )
}