import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ resultsArr, onModalOpen }) {
  return (
    <ul>
      {resultsArr.map((image) => (
        <li key={image.id}>
          <ImageCard picture={image} onModalOpen={onModalOpen} />
        </li>
      ))}
    </ul>
  );
}
