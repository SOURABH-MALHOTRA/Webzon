import React from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home.jsx";
import About from './Components/About.jsx';
import Services from './Components/Services.jsx';
import Contact from './Components/Contact.jsx';
import Portfolio  from './Components/Portfolio.jsx';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Route>
    </Routes>
  );
};

export default App;
