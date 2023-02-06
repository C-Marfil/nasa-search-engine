import React from "react";
import MovingComponent from "react-moving-text";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="homediv">
      <MovingComponent
        className="moving-words"
        type="pulse"
        duration="2000ms"
        delay="1s"
        direction="alternate-reverse"
        timing="ease"
        id="pulse"
        iteration="infinite"
        fillMode="none"
      >
        Welcome, use the Search Bar above to find any pictures held in the
        public NASA archives.
      </MovingComponent>
      <hr />
    </div>
  );
};

export default Home;
