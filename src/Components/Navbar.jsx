import { Link } from "react-router-dom";
import Profile from "./Profile";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deactivateAccount, logout } from "../Redux/features/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logOut = () =>  dispatch(logout());

  const deactivate = () => dispatch(deactivateAccount());

  useEffect(() => {
    setIsLoggedIn(userState.profile !== null);
  }, [userState]);

  return (
    <div className="navbar">
      <span className="pointer">URL Shortener</span>

      {isLoggedIn ? (
        <Profile logOut={logOut} deactivate={deactivate} profile={userState.profile} />
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
