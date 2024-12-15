import React from "react";
import Header from "../landingPage/Header";
import Footer from "../landingPage/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;