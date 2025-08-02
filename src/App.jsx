import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";

import ForStudents from "./pages/ForStudents";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar/Navbar";
import ContactUs from './pages/contact';
const App = () => {
  return (
    <Router>
      <Navbar /> {/* shows on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      
        <Route path="/for-students" element={<ForStudents />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/resources" element={<Resources />} />
      <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>
  );
};

export default App;
