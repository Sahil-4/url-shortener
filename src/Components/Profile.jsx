import { useState } from "react";

function Profile({ logOut }) {
  const [view, setView] = useState("close");

  const handleOpen = () => {
    setView("open");
    document.addEventListener("click", handleClose, true);
  };

  const handleClose = () => {
    setView("close");
    document.removeEventListener("click", handleClose, true);
  };

  return (
    <>
      <div
        className={`pointer profile profile-close ${
          view === "close" ? "" : "hidden"
        }`}
        onClick={handleOpen}
      >
        A
      </div>
      <div
        className={`profile ${view === "close" ? "hidden" : ""}`}
        onClick={handleClose}
      >
        <h3 className="text pointer">Your Name</h3>
        <button className="text pointer" onClick={logOut}>
          Deactivate Account
        </button>
        <button className="text pointer" onClick={logOut}>
          Log out
        </button>
      </div>
    </>
  );
}

export default Profile;
