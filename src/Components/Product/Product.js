import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {_id, img, name, price, description, quantity, supplier, sold } =
    product;
  return (
    <Col>
      <Card className="cart-custom bg-info bg-gradient bg-opacity-10 mx-auto border border-info " style={{ width: "350px", borderRadius:"7px" }}>
        <Card.Img style={{ borderRadius:"10px" }} className=" d-fluid p-1 rounded-5" variant="top" src={img} />
        <Card.Body className="mx-3">
          <Card.Title className="my-3 fw-bold fs-4 text-center">
            {name}
          </Card.Title>
          <div className="d-flex justify-content-around mb-2">
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
          <Card.Text>
            <small>
              {description.length > 80
                ? description.slice(0, 78) + "..."
                : description}
            </small>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="border-0 bg-c-footer bg-info bg-gradient bg-opacity-10 pb-0 w-100 d-flex justify-content-center">
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
