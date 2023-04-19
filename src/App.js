import ActivatiesCard from "./components/ActivatiesCard";
import Booking from "./components/Booking";
import MainCard from "./components/MainCard";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <MainCard />
      <ActivatiesCard />
      <Booking />
    </div>
  );
}

export default App;
