import {CopyBlock} from "react-code-blocks";
import React from "react";

const CalcCSS = () => {
    return (
        <>
            <h2>Calculate height/width in CSS</h2>
            <CopyBlock
                text={`
                .main-content {
                /* Subtract 80px from 100vh */
                height: calc(100vh - 80px);
                }`}
                language={'jsx'}
                showLineNumbers={true}
                wrapLines
                theme={'dracula'}
            />
            <hr/>
            <span>Reference: <a href={'https://css-tricks.com/a-complete-guide-to-calc-in-css/'}>https://css-tricks.com/a-complete-guide-to-calc-in-css/</a></span>
        </>
    )
}

export {CalcCSS}