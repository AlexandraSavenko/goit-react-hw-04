import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchPhoto } from "./fetchPhoto";
import LoadMoreButton from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
function App() {
  const [text, setText] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = (values, actions) => {
    actions.resetForm();
    setTopic(values.searchwords);
    setPage(1);
    setText([]);
  };
  useEffect(() => {
    if (topic === "") {
      return;
    }
    const fetchData = async () => {
      try {
        setLoading(true);
        setErr(false);
        const fetchedPhotos = await fetchPhoto(topic, page);
        setText((prevText) =>
          page === 1 ? fetchedPhotos : [...prevText, ...fetchedPhotos]
        );
      } catch (error) {
        setErr(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, topic]);
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery resultsArr={text} />
      {loading && <Loader />}
      {text.length > 0 && <LoadMoreButton onLoadMore={handleLoadMore} />}
      {err && <ErrorMessage />}
    </div>
  );
}

export default App;
