import React, { useEffect } from "react";

const Modal = ({ message, closeModal }) => {
  useEffect(() =>
    setTimeout(() => {
      closeModal();
    }, 3000)
  );

  return (
    <div className="modal">
      <p>{message}</p>
    </div>
  );
};

export default Modal;
