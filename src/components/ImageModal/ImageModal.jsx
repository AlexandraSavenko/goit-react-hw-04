import { useEffect } from "react";
import ReactModal from "react-modal";
export default function ImageModal({ isOpen, onClose, modalData }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.code === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={true}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
    >
      <div>
        <img
          src={modalData.urls.regular}
          alt={modalData.urls.alt_description}
        />
      </div>
    </ReactModal>
  );
}
