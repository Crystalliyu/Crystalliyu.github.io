import './App.less';
import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from "./views/home/Home";
import TechRoad from "./views/Tech/TechRoad";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="tech-road" element={<TechRoad/>} />
      </Routes>
  );
}

export default App;
