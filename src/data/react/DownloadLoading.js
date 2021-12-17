import { CopyBlock } from "react-code-blocks";
import React from "react";

export default function DownLoadLoading(props) {
    const code = `
    const fetchFile = async (url, domain, type) => {
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
            <h2>Loading when download</h2>
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