import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Sheared/Loading/Loading";

const Login = () => {
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    console.log(user);
    navigate("/");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
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
        <p className="text-danger">{error?.message}</p>
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
