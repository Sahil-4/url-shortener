import Navbar from "../Components/Navbar"
import URLList from "../Components/URLList"
import URLShortenerBox from "../Components/URLShortenerBox"

function Home() {
  return (
    <>
     <Navbar />
     <URLShortenerBox />
     <URLList />
    </>
  )
}

export default Home