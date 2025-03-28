import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Book from "./pages/Book";
import Fashion from "./pages/Fashion";
import Birthday from "./pages/Birthday";
import Wedding from "./pages/Wedding";
import NoPage from "./pages/NoPage";
import Portfolio from "./pages/Portfolio";
import { ThemeProvider } from "./components/ThemeContext";
import LoadingScreen from "./components/LoadingScreen";
import Corporates from "./pages/Corporates";
import Music from "./pages/Music";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <HelmetProvider>
          <ThemeProvider>
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/book" element={<Book />} />
              <Route path="/fashion" element={<Fashion />} />
              <Route path="/birthday" element={<Birthday />} />
              <Route path="/weddings" element={<Wedding />} />
              <Route path="/no-page" element={<NoPage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/corporate" element={<Corporates />} />
              <Route path="/music" element={<Music />} />
            </Routes>
            <Footer />
          </ThemeProvider>
        </HelmetProvider>
      )}
    </div>
  );
};

export default App;
