import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import AddResource from "./pages/addResouce";
import Home from "./pages/home";
function App() {
  return (
    <div className="relative">
      <ToastContainer position="bottom-center" theme="colored" />
      <div className="sticky top-0">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addresource" element={<AddResource />} />
      </Routes>
    </div>
  );
}

export default App;
