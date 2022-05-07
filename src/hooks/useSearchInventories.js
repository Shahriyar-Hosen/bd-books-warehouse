import { useEffect, useState } from "react";
const axios = require("axios");
const useSearchInventories = (email) => {
  const [inventory, setInventory] = useState([]);

  // Read / Get Method - Read by Search query
  useEffect(() => {
    const getItems = async () => {
      const url = `http://localhost:5000/my-items/?email=${email}`;
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setInventory(data);
    };
    getItems();
  }, [email]);
  // ---------------------------------------

  return [inventory, setInventory];
};

export default useSearchInventories;
