import React from "react";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import Main from "../../components/home/Main";

// ["100","200","300","400","500","600","700","800","900"]
function index() {
  return (
    <div className={`w-full prose flex flex-col  bg-black `}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default index;
