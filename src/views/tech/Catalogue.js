import {ReactList} from "../../data/list/ReactList";
import {Row} from "../../styles/CommonStyles";
import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Card} from "antd";
import {CSSList} from "../../data/list/CSSList";

export default function Catalogue(props) {
    const [list, setList] = useState(ReactList);
    const navigate = useNavigate();

    useEffect(() => {
        switch (props.tab) {
            case '1':
                setList(ReactList);
                break;
            case '5':
                setList(CSSList);
                break;
            default:
                setList(ReactList);
        }
    }, [props.tab])
    return (
        <>
            {list.map((item) =>
                    <Card title={<h2 style={{color:'1C1E21'}}>{item.title}</h2>} bordered={false} style={{ width: '100%', cursor:'pointer' }} onClick={() => navigate(item.path)}>
                        <Row><span style={{fontWeight:'bold'}}>{item.date}</span><p>---{item.description}</p></Row>
                    </Card>
            )}
        </>
    )
}