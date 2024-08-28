import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';
import Home from './pages/Home.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
