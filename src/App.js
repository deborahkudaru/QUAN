import React from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Album from "./pages/Album";
import Book from "./pages/Book";
import { Routes, Route } from "react-router-dom";
// import Logo from "./components/Logo";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      {/* <Body /> */}
      <Header />
      <Routes>
        {/* <Route path="/" element={<Logo />} /> */}
        <Route path="/" element={<Body />} />
        <Route path="/album" element={<Album />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
