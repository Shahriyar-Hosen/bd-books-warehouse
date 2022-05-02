import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Sheared/Footer/Footer";
import Header from "./Components/Sheared/Header/Header";
import UpdateItems from "./Components/UpdateItems/UpdateItems";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/update:id" element={<UpdateItems />} />
        <Route path="/update:id" element={<UpdateItems />} />
        <Route path="/update:id" element={<UpdateItems />} />
        <Route path="/update:id" element={<UpdateItems />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
