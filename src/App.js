import './App.less';
import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from "./views/home/Home";
import TechBlog from "./views/tech/TechBlog";
import Project from "./views/project/Project";
import About from "./views/about/About";
import Personal from "./views/about/Personal";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="tech-blog/*" element={<TechBlog/>} />
          <Route path="projects/*" element={<Project/>} />
          <Route path="about/*" element={<About/>} />
          <Route path="personal/*" element={<Personal/>} />
      </Routes>
  );
}

export default App;
