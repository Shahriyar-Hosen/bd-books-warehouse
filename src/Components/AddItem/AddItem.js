import React from "react";
import { Button, Form } from "react-bootstrap";

const AddItem = () => {
  return (
    <div className="container">
      <Form className="w-50 mx-auto py-5">
        <h1 className="text-center" style={{ color: "navy" }}>
          Add Item
        </h1>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="number" placeholder="Price" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="number" placeholder="quantity" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="number" placeholder="sold" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="supplier" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="img" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="category" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} placeholder="description" />
        </Form.Group>
        <Button
          className="d-block mx-auto px-5 text-white fs-4"
          variant="info"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddItem;
