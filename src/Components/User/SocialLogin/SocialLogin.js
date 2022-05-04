import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Sheared/Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    console.log(user);
    navigate(from, { replace: true });
  }
  return (
    <div className=" w-50 mx-auto">
      <div className="d-flex align-items-center">
        <div
          style={{ height: "1px" }}
          className="opacity-50 bg-secondary w-50"
        ></div>
        <p className="mx-2 mt-2">or</p>
        <div
          style={{ height: "1px" }}
          className="opacity-50 bg-secondary w-50"
        ></div>
      </div>

      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline-info mt-1 w-100 rounded-pill"
      >
        <img
          style={{ height: "30px" }}
          src="https://i.ibb.co/rmRz9g1/1.png"
          className="mx-2 rounded-circle"
          alt=""
        />
        CONTINUE WITH GOOGLE
      </button>
      {error ? (
        <p className="text-danger text-center">Error: {error.message}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default SocialLogin;
