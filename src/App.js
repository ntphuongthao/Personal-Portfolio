import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <NavigationBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
