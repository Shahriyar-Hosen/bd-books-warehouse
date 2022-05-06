import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Loading from "../Sheared/Loading/Loading";
import "./TopPublications.css";

const TopPublications = () => {
  const [publications, setPublications] = useState([]);
  // Get Method - Read all data
  useEffect(() => {
    // fetch("https://quiet-sierra-51150.herokuapp.com/categories")
    fetch("http://localhost:5000/publications")
      .then((res) => res.json())
      .then((data) => setPublications(data));
  }, []);
  // ----------------------------------------

  if (publications.length === 0) {
    return <Loading></Loading>;
  }
  return (
    <div className="background p-5 my-5">
      <div className="container my-5">
        <h1 style={{ color: "navy" }} className="my-5 text-center fw-bold">
          TOP PUBLISHER
        </h1>
        <Row xs={1} md={3} className="g-4">
          {publications.slice(0, 3).map((publication) => (
            <Col key={publication._id}>
              <Card
                style={{ width: "200px" }}
                className="mx-auto border-0 focus-hover"
              >
                <Card.Img
                  style={{ width: "100px" }}
                  className="mx-auto mt-3 rounded-circle shadow-lg  mb-3 bg-body rounded"
                  variant="top"
                  src={publication.img}
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    {publication.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default TopPublications;
