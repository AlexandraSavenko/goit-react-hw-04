export default function ImageCard({ picture }) {
  return (
    <div>
      <img src={picture.urls.small} alt="" />
    </div>
  );
}
