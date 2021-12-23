import React from "react";
import {CalcCSS} from "../css/CalcCSS";
import {Spin} from "../css/Spin";

export const CSSList = [
    {
        title: 'Calculate height/width in CSS',
        path: './calc-css',
        date: 'December 21, 2021',
        description: 'use calc() to calculate the height/width in css file',
        element: <CalcCSS/>,
    },
    {
        title: 'Add spinning animation for image',
        path: './spin',
        date: 'December 23, 2021',
        description: 'Add spinning animation for image',
        element: <Spin/>,
    }
]