import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import AddResource from "./pages/addResouce";
function App() {
  return (
    <div className="relative">
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
