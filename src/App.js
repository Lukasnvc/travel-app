import ActivatiesCard from "./components/ActivatiesCard";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import MainCard from "./components/MainCard";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <MainCard />
      <ActivatiesCard />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
