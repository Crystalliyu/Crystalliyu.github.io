import {CopyBlock} from "react-code-blocks";
import React from "react";

const Spin = () => {
    return (
        <>
            <h2>Add spinning animation for image</h2>
            <CopyBlock
                text={`
                @media (prefers-reduced-motion: no-preference) {
                    .loading {
                        animation: App-logo-spin infinite 3s linear;
                    }
                }
                @keyframes App-logo-spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                `}
                language={'jsx'}
                showLineNumbers={true}
                wrapLines
                theme={'dracula'}
            />
            <hr/>
        </>
    )
}

export {Spin}