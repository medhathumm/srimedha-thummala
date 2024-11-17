import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./Pages/Main/Main";
import Experiences from "./Pages/Experiences/Experiences";
import Extracurriculars from "./Pages/Extracurriculars/Extracurriculars";
import Projects from "./Pages/Projects/Projects";
import PhotoGallery from "./Pages/PhotoGallery/PhotoGallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/experiences" element={<Experiences/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/extracurriculars" element={<Extracurriculars/>}/>
        <Route path="/photogallery" element={<PhotoGallery/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
