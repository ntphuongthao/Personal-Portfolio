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
          <Route path="/" component={Home} />
          <Route path="/project" component={Project} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
