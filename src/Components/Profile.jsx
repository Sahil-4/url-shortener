import { useState } from "react";

function Profile({ logOut }) {
  const [view, setView] = useState("close");

  const handleOpen = () => {
    setView("open");
  };

  const handleClose = () => {
    setView("close");
  };

  return (
    <>
      {view === "close" ? (
        <div className={"pointer profile profile-close"} onClick={handleOpen}>
          A
        </div>
      ) : (
        <>
          <div className="profile-wrapper" onClick={handleClose}></div>
          <div className="profile">
            <h3 className="text pointer">Your Name</h3>
            <button className="text pointer" onClick={logOut}>
              Deactivate Account
            </button>
            <button className="text pointer" onClick={logOut}>
              Log out
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Profile;
