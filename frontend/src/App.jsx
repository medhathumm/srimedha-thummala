import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./Pages/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
