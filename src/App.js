import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddItem from "./Components/AddItem/AddItem";
import Blogs from "./Components/Blogs/Blogs";
import Home from "./Components/Home/Home";
import ManageInventories from "./Components/ManageInventories/ManageInventories";
import MyItems from "./Components/MyItems/MyItems";
import Footer from "./Components/Sheared/Footer/Footer";
import Header from "./Components/Sheared/Header/Header";
import NotFound from "./Components/Sheared/NotFound/NotFound";
import UpdateItems from "./Components/UpdateItems/UpdateItems";
import Login from "./Components/User/Login/Login";
import RequireAuth from "./Components/User/RequireAuth/RequireAuth";
import SignUp from "./Components/User/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/update:id"
          element={
            <RequireAuth>
              <UpdateItems />
            </RequireAuth>
          }
        />
        <Route
          path="/manage-inventories"
          element={
            <RequireAuth>
              <ManageInventories />
            </RequireAuth>
          }
        />
        <Route
          path="/add-item"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        />
        <Route
          path="/my-items"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
