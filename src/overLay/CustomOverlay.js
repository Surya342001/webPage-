import React, { useState } from "react";
import "./CustomOverlay.css";

const CustomOverlay = ({ children, onCloseClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleCloseClick = () => {
    setIsVisible(false);
    if (onCloseClick) {
      onCloseClick(); // Call the provided onCloseClick function
    }
  };

  return (
    isVisible && (
      <div className="custom-overlay">
        <div className="overlay-content">{children}</div>
        <button className="overlay-close" onClick={handleCloseClick}>
          Close
        </button>
      </div>
    )
  );
};

export default CustomOverlay;
