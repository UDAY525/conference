import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div>Layout</div>
      <main style={{ minHeight: "90vh" }}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
