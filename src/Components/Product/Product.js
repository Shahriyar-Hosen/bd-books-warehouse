import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const {_id, img, name, price, description, quantity, supplier, sold, category } =
    product;
  return (
    <Col>
      <Card className="cart-custom mx-auto" style={{ width: "350px" }}>
        <Card.Img className=" d-fluid p-1 rounded" variant="top" src={img} />
        <Card.Body className="mx-3">
          <Card.Title className="my-3 fw-bold fs-4 text-center">
            {name}
          </Card.Title>
          <div className="d-flex justify-content-around">
            <div>
              <Card.Text className="my-1 fw-bold text-war text-success">
                Price: {price}
              </Card.Text>
              <Card.Text className="my-1 fw-bold text-success">
                Supplier: {supplier}
              </Card.Text>
            </div>
            <div>
              <Card.Text className="my-1 fw-bold text-success">
                Quantity: {quantity}
              </Card.Text>
              <Card.Text className="my-1 fw-bold text-success">
                Sold: {sold}
              </Card.Text>
            </div>
          </div>
          <Card.Text className="my-2">Category: {category}</Card.Text>
          <Card.Text>
            <small>
              {description.length > 80
                ? description.slice(0, 78) + "..."
                : description}
            </small>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="border-0 bg-c-footer pb-0 mx-auto d-flex">
          <Link to={`update${_id}`}>
            {" "}
            <button className="btn-custom px-5">UPDATE</button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Product;
