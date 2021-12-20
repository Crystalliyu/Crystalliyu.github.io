import React from "react";
import {CopyBlock} from "react-code-blocks";
import scrollToElement from "../../assets/scrollToElement.png";

export default function Scroll(props) {
    const code = `
        const scrollRef = useRef();
        
        const handleScroll = () => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
    `
    return (
        <>
            <h2>Scroll to a React element</h2>
            <CopyBlock
                text={code}
                language={'jsx'}
                showLineNumbers={true}
                wrapLines
                theme={'dracula'}
            />
            <img src={scrollToElement} alt={"code"}/>
        </>
    )
}