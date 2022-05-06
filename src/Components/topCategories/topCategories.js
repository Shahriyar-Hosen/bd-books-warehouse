import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Loading from "../Sheared/Loading/Loading";

const TopCategories = () => {
  const [categories, setCategories] = useState([]);
  // Get Method - Read all data
  useEffect(() => {
    // fetch("https://quiet-sierra-51150.herokuapp.com/categories")
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  // ----------------------------------------

  if (categories.length === 0) {
    return <Loading></Loading>;
  }

  return (
    <div className="container">
      <h1 style={{ color: "navy" }} className="my-5 text-center fw-bold">
        TOP CATEGORIES
      </h1>
      <Row xs={1} md={3} className="g-4">
        {categories.slice(0, 3).map((category) => (
          <Col key={category._id}>
            <Card style={{ width: "200px" }} className="mx-auto border-0">
              <Card.Img
                style={{ width: "100px" }}
                className="mx-auto p-3"
                variant="top"
                src={category.img}
              />
              <Card.Body>
                <Card.Title className="text-center">{category.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TopCategories;
