import React from "react";
import PropTypes from "prop-types";
import "../styles/back-to-top-button.css";

const BackToTopButton = ({ level }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: `smooth` });
  };

  return (
    <button
      className={level}
      aria-label="Top"
      onClick={handleClick}
      type="button"
    >
      ⇧
    </button>
  );
};

BackToTopButton.propTypes = {
  level: PropTypes.string.isRequired,
};

export default BackToTopButton;
