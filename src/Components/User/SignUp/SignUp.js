import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name, email, password);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}  className="w-50 mx-auto">
        <Form.Group className="mb-3 mt-3  fs-5" controlId="formBasicName">
          <Form.Control
            required
            type="text"
            name="name"
            className=""
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-3  fs-5" controlId="formBasicEmail">
          <Form.Control
            required
            type="email"
            name="email"
            className=""
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3 fs-5" controlId="formBasicPassword">
          <Form.Control
            required
            type="password"
            name="password"
            className=""
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept All Terms and Condition" />
        </Form.Group>
        <Button
          className="w-100 rounded-pill d-block mx-auto fs-4 mb-4"
          variant="primary"
          type="submit"
        >
          Sign Up
        </Button>
      </Form>
      <p className=" text-center mt-2">
        Already have an account?
        <Link to="/login" className="text-primary text-decoration-none px-2">
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
