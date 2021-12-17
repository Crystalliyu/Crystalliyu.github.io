import './App.less';
import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from "./views/home/Home";
import TechRoad from "./views/Tech/TechRoad";
import DownloadLoading from "./data/react/DownloadLoading";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="tech-road/*" element={<TechRoad/>} />
          <Route path="/loading-while-download" element={<DownloadLoading/>} />
      </Routes>
  );
}

export default App;
