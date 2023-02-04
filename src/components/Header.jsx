import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Search from "./Search";

const Header = ({ setSearchResults }) => {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
          className="nasa-logo"
          alt="NASA logo"
        />
      </Link>
      <Search setSearchResults={setSearchResults} />

      <p>Search Results</p>
    </div>
  );
};

Header.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};

export default Header;
