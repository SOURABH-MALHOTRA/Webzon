import React from "react";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";   
import { Outlet } from "react-router-dom";

import WhatsAppButton from "./Components/WhatsApp.jsx";
import SeoManager from "./Components/SeoManager.jsx";

function Layout() {
  return (
    <>
      <SeoManager />
      <WhatsAppButton />
      <Header/>
      <Outlet/>
      <Footer/>
     
    </>
  );
}

export default Layout;
