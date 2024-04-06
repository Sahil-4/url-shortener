import Navbar from "../Components/Navbar";
import URLList from "../Components/URLList";
import URLShortenerBox from "../Components/URLShortenerBox";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { logout } from "../Redux/features/authSlice";

function Home() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const token = userState.profile?.token;
    if (!userState.profile || !token) return navigate("/auth");
    if (jwtDecode(token).exp < Date.now() / 1000) dispatch(logout());
  }, [dispatch, navigate, userState.profile]);

  return (
    <>
      <Navbar />
      <URLShortenerBox />
      <URLList />
    </>
  );
}

export default Home;
