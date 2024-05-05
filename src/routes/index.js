import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import WorkExperience from '../pages/workExperience';
import Project from '../pages/project';
import Navbar from '../components/navbar';

function Index() {
  return (
    <Router>
      <div className="bg-black"> {/* Apply bg-black class here */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Index;
