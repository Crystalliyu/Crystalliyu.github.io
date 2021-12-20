import React from "react";
import {CopyBlock} from "react-code-blocks";
import img from '../../assets/loadImage.png';

export default function LoadImage(props) {
    const code = `
        const handleLoad = () => {
            setLoading(false);
        }
    `

    return (
        <>
            <h2>Loading while loading the image</h2>
            <CopyBlock
            text={code}
            language={'jsx'}
            showLineNumbers={true}
            wrapLines
            theme={'dracula'}
            />
            <img src={img} alt={"code"}/>
        </>
    )
}