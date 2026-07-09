import React, { Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import { LoaderCircle } from "lucide-react";
const Home = lazy(() => import("./Components/Home.jsx"));
const About = lazy(() => import("./Components/About.jsx"));
const Services = lazy(() => import("./Components/Services.jsx"));
const Contact = lazy(() => import("./Components/Contact.jsx"));
const Portfolio = lazy(() => import("./Components/Portfolio.jsx"));


const App = () => {
  return (
<Suspense
  fallback={
    <div className="min-h-screen flex items-center justify-center">
      <LoaderCircle className="w-12 h-12 text-blue-600 animate-spin" />
    </div>
  }
>
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
