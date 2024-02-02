import { Link } from "react-router-dom";
import Profile from "./Profile";
import { useState } from "react";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="navbar">
      <span className="pointer">URL Shortener</span>

      {isLoggedIn ? (
        <Profile logOut={logOut} />
      ) : (
        <span className="pointer">
          <Link to="/auth" className="text">
            Login
          </Link>
        </span>
      )}
    </div>
  );
}

export default Navbar;
