import React from "react";
import {Row } from "react-bootstrap";
import useInventory from "../../hooks/useInventory";
import Product from "../Product/Product";

const Products = () => {
  const [inventory] = useInventory([]);
  return (
    <div className="container my-5">
      <h1>Product: {inventory.length}</h1>
      <div>
        <Row xs={1} md={3} className="g-4">
          {inventory.slice(0, 6).map((items) => (
            <Product key={items._id} product={items}></Product>
          ))}
        </Row>
        <button className="btn-custom mx-auto d-block my-5 py-2 px-5">Manage Inventories</button>
      </div>
    </div>
  );
};

export default Products;
