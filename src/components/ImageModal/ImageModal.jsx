import ReactModal from "react-modal";
export default function ImageModal({ onOpen, bigpicture }) {
  console.log(bigpicture);

  return (
    <ReactModal isOpen={onOpen} ariaHideApp={true}>
      <div>
        <img src="" alt="" />
      </div>
    </ReactModal>
  );
}
