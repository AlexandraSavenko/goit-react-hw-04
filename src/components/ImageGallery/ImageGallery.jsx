import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ resultsArr }) {
  return (
    <ul>
      {resultsArr.map((image) => (
        <li key={image.id}>
          <ImageCard picture={image} />
        </li>
      ))}
    </ul>
  );
}
