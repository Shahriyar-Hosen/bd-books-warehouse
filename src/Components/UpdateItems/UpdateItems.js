import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UpdateItems = () => {
  const { id } = useParams();
  const [product, setProducts] = useState([]);
  const {
    _id,
    img,
    name,
    price,
    description,
    quantity,
    supplier,
    sold,
    category,
  } = product;
  useEffect(() => {
    const url = `https://quiet-sierra-51150.herokuapp.com/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);

  return (
    <div className="container w-100 ">
      <CardGroup className="w-75 w-md-50 mx-auto py-5">
        <Card
          className=" shadow-lg bg-info bg-gradient bg-opacity-10 mx-auto border border-info"
          style={{ borderRadius: "7px" }}
        >
          <Card.Img
            style={{ maxWidth: "400px", borderRadius: "10px" }}
            className="w-50 w-md-25 mx-auto"
            variant="top"
            src={img}
          />
          <Card.Body>
            <Card.Title
              style={{ color: "navy" }}
              className="my-3 fw-bold fs-4 text-center"
            >
              {name}
            </Card.Title>
            <div
              style={{
                color: "rgb(2, 2, 175)",
                width: "80%",
                borderRadius: "10px",
                backgroundColor: "rgb(232, 255, 187)",
              }}
              className=" mx-auto d-flex justify-content-around shadow-sm p-2 mb-3"
            >
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
                <Card.Text className="my-1 fw-bold">Sold: {sold}</Card.Text>
              </div>
            </div>
            <Card.Text className="my-2 text-center">
              Category: {category}
            </Card.Text>
            <Card.Text>
              <small>
                {description?.length > 250
                  ? description.slice(0, 250) + "..."
                  : description}
              </small>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="border-0 bg-c-footer bg-info bg-gradient bg-opacity-10 pb-0 w-100 d-flex justify-content-center">
            <button className="btn-custom px-5 me-2">UPDATE</button>
            <button className="btn-custom px-5 me-2">UPDATE</button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default UpdateItems;
