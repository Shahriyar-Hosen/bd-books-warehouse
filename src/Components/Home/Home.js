import React, { useEffect, useState } from 'react';

const Home = () => {
    const [inventory, setInventory] = useState([])
    // Get Method - Read all data
  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);
  // ----------------------------------------
    return (
        <div>
            <h1>This home Page: {inventory.length}</h1>
            {
                inventory.map((items) => <p key={items._id}>Name: {items.name}</p>)
            }
        </div>
    );
};

export default Home;