import React from "react";
import useInventory from "../../hooks/useInventory";

const Products = () => {
  const [inventory] = useInventory([]);
  return (
    <div>
      <h1>Product: {inventory.length}</h1>
      {inventory.slice(0, 6).map((items) => (
        <p key={items._id}>Name: {items.name}</p>
      ))}
    </div>
  );
};

export default Products;
