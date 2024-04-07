import URLBox from "./URLBox";
import { useSelector, useDispatch } from "react-redux";
import { deleteUrl } from "../Redux/features/urlSlice";

function URLList() {
  const urlState = useSelector((state) => state.url);
  const dispatch = useDispatch();

  const copyURL = (url) => {
    navigator.clipboard.writeText(url);
  };

  const deleteURL = (url) => {
    dispatch(deleteUrl(url));
  };

  return (
    <div className="container list">
      {urlState.urls.length === 0 && <p>No URLs Found</p>}
      {urlState.urls.map((url) => (
        <URLBox key={url._id} url={url.short_url} copyURL={copyURL} deleteURL={deleteURL} />
      ))}
    </div>
  );
}

export default URLList;
