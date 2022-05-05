import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useInventory from "../../hooks/useInventory";
import Product from "../Product/Product";
import Loading from "../Sheared/Loading/Loading";

const Products = () => {
  const [inventory] = useInventory();
  if (inventory.length === 0) {
    return <Loading></Loading>
  }
  return (
    <div className="container my-5">
      <h1>Product: {inventory.length}</h1>
      <div>
        <Row xs={1} md={3} className="g-4">
          {inventory.slice(0, 6).map((items) => (
            <Product key={items._id} product={items}></Product>
          ))}
        </Row>
        <Link to="/manage-inventories" className="text-decoration-none">
          <button className="btn-custom mx-auto d-block my-5 py-2 px-5">
            Manage Inventories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
