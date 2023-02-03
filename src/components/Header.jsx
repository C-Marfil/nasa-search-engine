import React from "react";
import PropTypes from "prop-types";
import Search from "./Search";

const Header = ({ setSearchResults }) => {
  return (
    <div className="header">
      <img
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        className="nasa-logo"
        alt="NASA logo"
      />
      <Search setSearchResults={setSearchResults} />

      <p>Search Results</p>
    </div>
  );
};

Header.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};

export default Header;
