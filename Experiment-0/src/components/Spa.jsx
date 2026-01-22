import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import React, { Suspense } from 'react';

// import About from './About';
// import Contact from './Contact';
const About = React.lazy(() => import('./About'));
const Contact = React.lazy(() => import('./Contact'));

export default function SinglePageApp() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        {
        /*
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        */
        }

        <Route path="/about" element={
          <Suspense fallback={<div>Loading About Page...</div>}>   
            <About /> 
          </Suspense>
          } />
        <Route path="/contact" element={
          <Suspense fallback={<div>Loading Contact Page...</div>}>   
            <Contact /> 
          </Suspense>
          } />
          
      </Routes>
    </BrowserRouter>
  );
}
