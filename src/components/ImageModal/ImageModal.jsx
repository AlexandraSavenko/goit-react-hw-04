import { useEffect } from "react";
import ReactModal from "react-modal";
import Loader from "../Loader/Loader";
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
        {modalData ? (
          <img
            src={modalData && modalData.urls.regular}
            alt={modalData && modalData.urls.alt_description}
          />
        ) : (
          <Loader />
        )}
      </div>
    </ReactModal>
  );
}
