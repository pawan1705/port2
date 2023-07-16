import {Routes,Route} from 'react-router-dom';
import "./App.css";
import Nav from "./NavComponent/Nav";
import Links from "./LinksComponent/Links";
import Footer from "./FooterComponent/Footer";
import Main from "./MainComponent/Main";
import Skill from './SkillComponent/Skill'
import About from './AboutComponent/About'
import Resume from './ResumeComponent/Resume'
function App() {
  return (
    <>
      <Nav />
      {/* <Main /> */}
      <Routes>
      <Route path="/" element={<Main/>}></Route>
        <Route path="/skill" element={<Skill/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/resume" element={<Resume/>}></Route>
      </Routes>
      <Links />
      <Footer />
      
    </>
  );
}

export default App;
