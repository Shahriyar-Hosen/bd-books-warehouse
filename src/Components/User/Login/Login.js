import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Sheared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  if (loading) {
    return <Loading />;
  }

  if (sending) {
    return console.log("sending");
  }

  if (user) {
    console.log(user);
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    console.log("Sent email");
  };

  return (
    <div className="container mb-5">
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Control
            required
            ref={emailRef}
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
        <p className="text-danger">{resetError?.message}</p>
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
        <Link
          to="/login"
          onClick={resetPassword}
          className="text-primary text-decoration-none px-2"
        >
          Reset Password
        </Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Login;
