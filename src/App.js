import React from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import Album from "./pages/Album";
import Book from "./pages/Book";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/album" element={<Album />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
