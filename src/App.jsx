import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchPhoto } from "./fetchPhoto";
import LoadMoreButton from "./components/LoadMoreBtn/LoadMoreBtn";
function App() {
  const [text, setText] = useState([]);
  const handleSearch = async (values, actions) => {
    actions.resetForm();
    try {
      const fetchedPhotos = await fetchPhoto(values.searchwords);
      // fetchedPhotos.then((res, rej) => {
      //   setText(res);
      // });
      setText(fetchedPhotos);
    } catch (error) {}
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery resultsArr={text} />
      {text.length > 0 && <LoadMoreButton />}
    </div>
  );
}

export default App;
