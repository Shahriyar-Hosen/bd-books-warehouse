import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItem from "./Components/AddItem/AddItem";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import ManageInventories from "./Components/ManageInventories/ManageInventories";
import MyItems from "./Components/MyItems/MyItems";
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
        <Route path="/manage-inventories" element={<ManageInventories />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/my-items" element={<MyItems />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
