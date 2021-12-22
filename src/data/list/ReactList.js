import React from "react";
import DownloadLoading from "../react/DownloadLoading";
import LoadImage from "../react/LoadImage";
import Scroll from "../react/ScrollToElement";

export const ReactList = [
    {
        title: 'Loading when downloading the file',
        path:'./loading-while-download',
        date: 'December 15, 2021',
        description: 'Get the loading status while downloading the file from server',
        element: <DownloadLoading/>,
    },
    {
        title: 'Loading when loading the image',
        path: './load-image',
        date: 'December 17, 2021',
        description: 'Get the loading status while getting an image from server',
        element: <LoadImage/>,
    },
    {
        title: 'Scroll to a React element',
        path: './scroll',
        date: 'December 18, 2021',
        description: 'When you use the hotkey to navigate, scroll the view to the selected element automatically',
        element: <Scroll/>,
    }
]