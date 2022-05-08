import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../../images/notFound.png";

const NotFound = () => {
  return (
    <div className="container text-center">
      <img src={notFound} className="w-100 d-block mx-auto my-5" alt="" />
      <Link to="/" className="btn btn-outline-primary mb-5 px-5 fs-5 rounded-pill">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
