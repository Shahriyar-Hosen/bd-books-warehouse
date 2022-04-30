import React from "react";
import { Card, Col } from "react-bootstrap";

const Product = ({product}) => {
    const {image} = product;
  return (
    <div>
      <Col>
            <Card>
              <Card.Img style={{width: "300px"}} className="mx-auto pt-1" variant="top" src={image} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    </div>
  );
};

export default Product;
