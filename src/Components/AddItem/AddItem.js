import React from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const AddItem = () => {
  //   const items = {
  /* name
"Ceṣṭara jimanesiyama future era Calcium"

supplier
"Rokomari"

category
"Self-developmental"

img
"https://i.ibb.co/m4d4MTM/site-img-5.png" 

description
"So that by eating bamboo, Bedisha, frustration with life."

*/
  //   };
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const sold = event.target.sold.value;
    const supplier = event.target.supplier.value;
    const img = event.target.img.value;
    const category = event.target.category.value;
    const description = event.target.description.value;

    const inventory = {
      email,
      name,
      price: parseInt(price),
      quantity: parseInt(quantity),
      sold: parseInt(sold),
      supplier,
      img,
      category,
      description,
    };

    console.log(inventory);

    // Create / POST Method - Add to database
    fetch("https://quiet-sierra-51150.herokuapp.com/inventory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inventory),
    })
      .then((response) => response.json())
      .then((data) => {
        toast("Create data Success" );
        event.target.reset();
        alert("user added successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // ------------------------------------
  };

  return (
    <div className="container">
      <Form className="w-50 mx-auto py-5" onSubmit={handleSubmit}>
        <h1 className="text-center" style={{ color: "navy" }}>
          Add Item
        </h1>
        <Form.Group className="mb-3">
          <Form.Control type="email" name="email" placeholder="User Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" name="name" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="number" placeholder="Price" name="price" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="number" placeholder="quantity" name="quantity" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="number" placeholder="sold" name="sold" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="supplier" name="supplier" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="category" name="category" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="img" name="img" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="description"
            name="description"
          />
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
