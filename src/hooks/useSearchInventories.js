import { useEffect, useState } from "react";

const useSearchInventories = (email) => {
  const [inventory, setInventory] = useState([]);

  // Read / Get Method - Read by Search query
  useEffect(() => {
    const url = `https://quiet-sierra-51150.herokuapp.com/inventory/?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [email]);
  // ---------------------------------------

  return [inventory, setInventory];
};

export default useSearchInventories;
