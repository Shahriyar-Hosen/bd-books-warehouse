import { useEffect, useState } from "react";
const axios = require("axios");
const useSearchInventories = (email) => {
  const [inventory, setInventory] = useState([]);

  // Read / Get Method - Read by Search query
  // http://localhost:5000/
  // https://quiet-sierra-51150.herokuapp.com/
  useEffect(() => {
    const getItems = async () => {
      const url = `https://quiet-sierra-51150.herokuapp.com/my-items/?email=${email}`;
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
