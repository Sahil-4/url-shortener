import Navbar from "../Components/Navbar";
import URLList from "../Components/URLList";
import URLShortenerBox from "../Components/URLShortenerBox";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Home() {
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userState.profile) navigate("/auth");
  }, [navigate, userState.profile]);

  return (
    <>
      <Navbar />
      <URLShortenerBox />
      <URLList />
    </>
  );
}

export default Home;
