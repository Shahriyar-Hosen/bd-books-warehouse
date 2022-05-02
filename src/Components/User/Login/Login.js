import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  };

  return (
    <div className="container mb-5">
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Control
            required
            type="email"
            name="email"
            className=""
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            required
            type="password"
            name="password"
            className=""
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button
          className="w-100 rounded-pill d-block mx-auto fs-5 mb-4"
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
      <p className=" text-center mt-2">
        New User?
        <Link to="/signup" className="text-primary text-decoration-none px-2">
          Please Register
        </Link>
      </p>
      <p className=" text-center mt-2">
        Forget Password?
        <Link to="/login" className="text-primary text-decoration-none px-2">
          Reset Password
        </Link>
      </p>
    </div>
  );
};

export default Login;
