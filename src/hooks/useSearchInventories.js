import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
const axios = require("axios");

const useSearchInventories = (email) => {
  const [inventory, setInventory] = useState([]);
  const navigate = useNavigate();

  // Read / Get Method - Read by Search query
  // http://localhost:5000/
  // https://quiet-sierra-51150.herokuapp.com/
  useEffect(() => {
    const getItems = async () => {
      const url = `https://quiet-sierra-51150.herokuapp.com/my-items/?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setInventory(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getItems();
  }, [email]);
  // ---------------------------------------

  return [inventory, setInventory];
};

export default useSearchInventories;
