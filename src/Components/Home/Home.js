import React, { useEffect, useState } from 'react';
import BannerCarousel from '../BannerCarousel/BannerCarousel';

const Home = () => {
    const [inventory, setInventory] = useState([])
    // Get Method - Read all data
  useEffect(() => {
    fetch("https://quiet-sierra-51150.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);
  // ----------------------------------------
    return (
        <div>
            <BannerCarousel />
            <h1 className=''>This home Page: {inventory.length}</h1>
            {
                inventory.map((items) => <p key={items._id}>Name: {items.name}</p>)
            }
        </div>
    );
};

export default Home;