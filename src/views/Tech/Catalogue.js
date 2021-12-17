import {ReactTitle} from "../../data/react/ReactTitle";
import {Paper, TitleRow} from "../../styles/CommonStyles";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function Catalogue(props) {
    const navigate = useNavigate();
    return (
        <>
            {ReactTitle.map((item) => <TitleRow onClick={() => navigate(item.path)}>{item.title}</TitleRow>)}
        </>
    )
}