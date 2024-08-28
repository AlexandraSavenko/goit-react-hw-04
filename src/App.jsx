import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchPhoto } from "./fetchPhoto";
function App() {
  const [text, setText] = useState(null);
  const handleSearch = async (values, actions) => {
    console.log(values);
    actions.resetForm();
    try {
      const fetchedPhotos = fetchPhoto(values.searchwords);
      setText(fetchedPhotos);
    } catch (error) {}
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery result={text} />
    </div>
  );
}

export default App;
