import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="relative">
      <div className="sticky top-0">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
