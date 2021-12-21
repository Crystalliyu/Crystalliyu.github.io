import {ReactTitle} from "../../data/react/ReactTitle";
import {Row} from "../../styles/CommonStyles";
import React from "react";
import {useNavigate} from "react-router-dom";
import {Card} from "antd";

export default function Catalogue(props) {
    const navigate = useNavigate();
    return (
        <>
            {ReactTitle.map((item) =>
                <>
                    <Card title={<h2>{item.title}</h2>} bordered={false} style={{ width: '100%', cursor:'pointer' }} onClick={() => navigate(item.path)}>
                        <Row><span style={{fontWeight:'bold'}}>{item.date}</span><p>---{item.description}</p></Row>
                    </Card>
                </>
            )}
        </>
    )
}