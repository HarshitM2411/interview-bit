import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import './App.scss';
import Layout from './Layout';
const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const Courses = React.lazy(() => import('./Courses'));
const Contact = React.lazy(() => import('./Contact'));
const Registration = React.lazy(() => import('./Registration'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Registration />} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
}

export default App;
