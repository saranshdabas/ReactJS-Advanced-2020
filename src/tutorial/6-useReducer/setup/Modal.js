import React, { useEffect } from "react";

const Modal = ({ message }) => {
  return (
    <div className="modal">
      <p>{message}</p>
    </div>
  );
};

export default Modal;
