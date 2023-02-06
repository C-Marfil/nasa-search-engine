import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Search from "./Search";
import "../styles/header.css";

const Header = ({ setSearchResults }) => {
  return (
    <div id="header">
      <Link to="/">
        <img
          src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
          className="nasa-logo"
          alt="nasa-logo"
        />
      </Link>
      <Search setSearchResults={setSearchResults} />
    </div>
  );
};

Header.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};

export default Header;
