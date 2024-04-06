import { MdDelete, MdContentCopy } from "react-icons/md";
import { Link } from "react-router-dom";

function URLBox({ url, copyURL, deleteURL }) {
  return (
    <div className="url-box">
      <Link className="text" to={url} target="_blank">{url}</Link>
      <MdContentCopy onClick={() => copyURL(url)} />
      <MdDelete onClick={() => deleteURL(url)} />
    </div>
  );
}

export default URLBox;
