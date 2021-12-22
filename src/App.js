import './App.less';
import React, {useState} from "react";
import {Route, Routes} from 'react-router-dom';
import Home from "./views/home/Home";
import TechBlog from "./views/tech/TechBlog";
import Project from "./views/project/Project";
import About from "./views/about/About";
import Personal from "./views/about/Personal";
import {ThemeContext, themes} from './styles/Theme';


function App() {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme(theme === themes.dark ? themes.light : themes.dark);
        document.body.style.background = theme === themes.dark ? themes.light.background : themes.dark.background;
    }

  return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="tech-blog/*" element={<TechBlog/>} />
              <Route path="projects/*" element={<Project/>} />
              <Route path="about/*" element={<About/>} />
              <Route path="personal/*" element={<Personal/>} />
          </Routes>
      </ThemeContext.Provider>
  );
}

export default App;
