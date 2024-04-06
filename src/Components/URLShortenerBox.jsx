import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUrl } from "../Redux/features/urlSlice";

function URLShortenerBox() {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();

  const shortURL = () => {
    if (url === "") return alert("Add a valid URL");
    dispatch(addUrl(url));
  };

  return (
    <div>
      <div className="url-shortener-box">
        <input
          type="text"
          name="url"
          value={url}
          placeholder="Enter URL here"
          onChange={(e) => setUrl(e.target.value)}
        />
        <div>
          <button className="pointer" onClick={shortURL}>
            Short
          </button>
        </div>
      </div>
    </div>
  );
}

export default URLShortenerBox;
