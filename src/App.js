import React from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import Album from "./pages/Album";
import Book from "./pages/Book";
import { Routes, Route } from "react-router-dom";
import Fashion from "./pages/Fashion";
import Birthday from "./pages/Birthday";
import Wedding from "./pages/Wedding";
import NoPage from "./pages/NoPage";
import Portfolio from "./pages/Portfolio";
import { ThemeProvider } from "./components/ThemeContext";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Body />} />
          {/* <Route path="/album" element={<Album />} /> */}
          <Route path="/book" element={<Book />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/weddings" element={<Wedding />} />
          <Route path="/no-page" element={<NoPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </ThemeProvider>
      <Footer />
    </div>
  );
};

export default App;
