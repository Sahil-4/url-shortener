import { MdDelete, MdContentCopy } from "react-icons/md";
import { Link } from "react-router-dom";

function URLBox({url}) {
  const copyURL = () => {}
  
  const deleteURL = () => {}

  return (
    <div className="url-box">
      <Link className="text" to={url} target="_blank">{url}</Link>
      <MdContentCopy onClick={copyURL} />
      <MdDelete onClick={deleteURL} />
    </div>
  );
}

export default URLBox;
