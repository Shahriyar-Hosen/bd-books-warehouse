import { useEffect, useState } from "react";

const useInventory = () => {
    const [inventory, setInventory] = useState([])
    // Get Method - Read all data
  useEffect(() => {
    fetch("https://quiet-sierra-51150.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);
  // ----------------------------------------
    return  [inventory, setInventory];
};

export default useInventory;