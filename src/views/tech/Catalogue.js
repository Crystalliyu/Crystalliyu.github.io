import {ReactList} from "../../data/list/ReactList";
import {Row} from "../../styles/CommonStyles";
import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Card} from "antd";
import {CSSList} from "../../data/list/CSSList";
import {ThemeContext} from "../../styles/Theme";
import {BlogCard} from "../../styles/TechStyles";

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
        <ThemeContext.Consumer>
            {({theme}) => (
                <>
                    {list.map((item) =>
                        <BlogCard title={<h2 style={{color: theme.cardTitle}}>{item.title}</h2>} bordered={false} onClick={() => navigate(item.path)}>
                            <Row><span style={{fontWeight:'bold'}}>{item.date}</span><p>---{item.description}</p></Row>
                        </BlogCard>
                    )}
                </>
            )}
        </ThemeContext.Consumer>
    )
}