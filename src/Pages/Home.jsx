import Navbar from "../Components/Navbar";
import URLList from "../Components/URLList";
import URLShortenerBox from "../Components/URLShortenerBox";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { logout } from "../Redux/features/authSlice";
import { getUrls } from "../Redux/features/urlSlice";
import Loader from "../Components/Loader";

function Home() {
  const userState = useSelector((state) => state.user);
  const urlState = useSelector((state) => state.url);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = userState.profile?.token;
    if (!userState.profile || !token) return navigate("/auth");
    if (jwtDecode(token).exp < Date.now() / 1000) dispatch(logout());
  }, [dispatch, navigate, userState.profile]);

  useEffect(() => {
    dispatch(getUrls());
  }, [dispatch]);

  if (urlState.isLoading) return <Loader />;
  return (
    <>
      <Navbar />
      <URLShortenerBox />
      <URLList />
    </>
  );
}

export default Home;
