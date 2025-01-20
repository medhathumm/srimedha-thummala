import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./Pages/Main/Main";
import Experiences from "./Pages/Experiences/Experiences";
import ExpItem from "./Pages/Experiences/ExpItem/ExpItem";
import Extracurriculars from "./Pages/Extracurriculars/Extracurriculars";
import ExtraCurrItem from "./Pages/Extracurriculars/ExtraCurrItem/ExtraCurrItem";
import Projects from "./Pages/Projects/Projects";
import ProjectItem from "./Pages/Projects/ProjectItem/ProjectItem";
import PhotoGallery from "./Pages/PhotoGallery/PhotoGallery";
import Footer from "./Sections/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/experiences" element={<Experiences/>}/>
        <Route path="experience" element={<ExpItem/>}>
          <Route path=':experienceId' element={<ExpItem/>}/>
        </Route>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="project" element={<ProjectItem/>}>
          <Route path=':projectId' element={<ProjectItem/>}/>
        </Route>
        <Route path="/extracurriculars" element={<Extracurriculars/>}/>
        <Route path="extracurricular" element={<ExtraCurrItem/>}>
          <Route path=':extracurricularId' element={<ExtraCurrItem/>}/>
        </Route>
        <Route path="/photogallery" element={<PhotoGallery/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
