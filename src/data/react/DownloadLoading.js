import { CopyBlock } from "react-code-blocks";
import React from "react";

export default function DownLoadLoading(props) {
    const code = `const fetchFile = async (url, domain, type) => {
        domain === 'project' ? setProjectLoading(true) : setClassLoading(true);
        const response = await fetch(url);
        const reader = response.body.getReader();
    
        const disposition = response.headers.get('Content-Disposition');
        if (!disposition) {
            domain === 'project' ? setProjectLoading(false) : setClassLoading(false);
            message.error(t("no_image_warning"))
            return
        }
        let filename = window.decodeURIComponent(
            disposition.split('=')[1],
            'utf-8'
        );

        const chunks = [];
        while (true) {
            const { done, value } = await reader.read();
            if (done) {
                break;
            }
            chunks.push(value);
        }
        domain === 'project' ? setProjectLoading(false) : setClassLoading(false);
        const blob = new Blob(chunks);
        if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveBlob(blob, filename);
        } else {
            const a = document.createElement('a');
            document.body.appendChild(a);
            const blobUrl = window.URL.createObjectURL(blob);
            a.href = blobUrl;
            a.download = filename;
            a.target = '_blank';
            a.click();
            a.remove();
            window.URL.revokeObjectURL(blobUrl);
        }
    };`

    return (
        <>
            <h1 style={{fontSize:'45px'}}>Loading when downloading the file</h1>
            <h3>How to download local file?</h3>
            <CopyBlock
                text={`<a href={"./cat.pdf"} download target="_blank">Download CV</a>`}
                language={'jsx'}
                showLineNumbers={true}
                wrapLines
                theme={'dracula'}
            />
            <hr/>
            <h3>How to download file from url?</h3>
            <h4>1. use Windows.open('url')</h4>
            <CopyBlock
                text={`window.location.href = API_URL + /api/export_classes_excel/id/`}
                language={'jsx'}
                showLineNumbers={true}
                wrapLines
                theme={'dracula'}
            />
            <hr/>
            <h4>2. Create an anchor tag {`<a>`} using the createElement property and assign download and href attributes to it.</h4>
            <CopyBlock
                text={code}
                language={'jsx'}
                showLineNumbers={true}
                wrapLines
                theme={'dracula'}
            />
        </>
    )
}