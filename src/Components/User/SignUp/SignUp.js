import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Sheared/Loading/Loading";

const SignUp = () => {
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (loading) {
    return <Loading />;
  }

  if (user) {
    navigate("/home");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name);
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
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
        <p>{error?.message}</p>
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
