import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import './App.css';
const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const Courses = React.lazy(() => import('./Courses'));
const Contact = React.lazy(() => import('./Contact'));
const Login = React.lazy(() => import('./Login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
