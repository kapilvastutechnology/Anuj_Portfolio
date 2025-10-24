import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  )
}



