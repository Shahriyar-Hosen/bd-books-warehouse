import React, { useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UpdateItems = () => {
  const { id } = useParams();
  const [product, setProducts] = useState([])
  const {_id, img, name, price, description, quantity, supplier, sold, category } =
    product;
  return (
    <div className="container">
      <p>This is Update Items ID: {id}</p>
      <CardGroup className="w-75 mx-auto py-5">
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title  style={{color:"navy"}} className="my-3 fw-bold fs-4 text-center">Card title{name}</Card.Title>
            <div style={{color:"rgb(2, 2, 175)"}} className="d-flex justify-content-around mb-2  text-">
            <div>
              <Card.Text className="my-1 fw-bold text-war ">
                Price: {price}
              </Card.Text>
              <Card.Text className="my-1 fw-bold">
                Supplier: {supplier}
              </Card.Text>
            </div>
            <div>
              <Card.Text className="my-1 fw-bold">
                Quantity: {quantity}
              </Card.Text>
              <Card.Text className="my-1 fw-bold">
                Sold: {sold}
              </Card.Text>
            </div>
          </div>
          <Card.Text className="my-2">Category: {category}</Card.Text>
          <Card.Text>
            <small>
              {description?.length > 80
                ? description.slice(0, 78) + "..."
                : description}
            </small>
          </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default UpdateItems;
