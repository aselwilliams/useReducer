import React, { useEffect } from "react";

function Modal({ modalContent, closeModal }) {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
}

export default Modal;
