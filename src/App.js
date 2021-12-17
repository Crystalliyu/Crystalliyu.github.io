import './App.less';
import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from "./views/home/Home";
import TechBlog from "./views/tech/TechBlog";
import Project from "./views/project/Project";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="tech-blog/*" element={<TechBlog/>} />
          <Route path="projects/*" element={<Project/>} />
      </Routes>
  );
}

export default App;
