export default function ImageCard({ picture, onModalOpen }) {
  return (
    <div onClick={() => onModalOpen(picture)}>
      <img src={picture.urls.small} alt={picture.alt_description} />
    </div>
  );
}
