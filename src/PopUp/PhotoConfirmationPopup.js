import React from "react";
import "../../src/PopUp/PhotoConfirmationPopup.css";

const PhotoConfirmationPopup = ({ imageUrl, onConfirm, onCancel }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <img src={imageUrl} alt="Uploaded" />
        <p>Is this the photo you want to upload?</p>
        <div className="button-container">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};

export default PhotoConfirmationPopup;
