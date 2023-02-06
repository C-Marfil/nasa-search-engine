import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { throttle } from "lodash";
import Home from "./Home";
import Header from "./Header";
import InspectImage from "./InspectImage";
import SearchResults from "./SearchResults";
import "../styles/app.css";
import BackToTopButton from "./BackToTopButton";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [level, setLevel] = useState("shallow");

  const handleScroll = throttle(() => {
    if (window.scrollY > 400) {
      setLevel("deep");
    } else if (level === "deep" && window.scrollY <= 200) {
      setLevel("shallow");
    }
  }, 500);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [level, handleScroll]);

  return (
    <div className="app">
      {level === "shallow" && <Header setSearchResults={setSearchResults} />}
      {level === "deep" && <BackToTopButton level={level} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:q"
          element={
            <SearchResults
              results={searchResults}
              setLevel={setLevel}
              level={level}
            />
          }
        />
        <Route path="/:q/image-detail" element={<InspectImage />} />
      </Routes>
    </div>
  );
};

export default App;
