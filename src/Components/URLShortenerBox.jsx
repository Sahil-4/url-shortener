import { useState } from "react";

function URLShortenerBox() {
  const [url, setUrl] = useState("");

  const shortURL = () => {
    if (url === "") return alert("Add a valid URL");
    console.log(url);
  };

  const copyURL = () => {
    if (url === "") return alert("Add a valid URL");
    console.log(url);
  };

  return (
    <div>
      <div className="url-shortener-box">
        <input
          type="text"
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <div>
          <button className="pointer" onClick={shortURL}>
            Short
          </button>
          <button className="pointer" onClick={copyURL}>
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default URLShortenerBox;
