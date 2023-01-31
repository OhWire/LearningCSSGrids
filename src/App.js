import {Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import Booking from "./pages/booking";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar/>
      <div className="">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/booking" element={<Booking/>} />
            <Route path="/Menu" element={<Menu/>} />
            <Route path="/aboutpage" element={<About/>} />
          </Routes>
      </div>
    </>
    
  );
}

export default App;
