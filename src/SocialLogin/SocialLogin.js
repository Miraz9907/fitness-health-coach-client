import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();

  const handleGoogle = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const currentUser = {
          email: user.email,
        };
        //get jwt token
        fetch("https://health-coach-server-eta.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("health-token", data.token);
            navigate(from, { replace: true });
          });
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="text-center mt-5">
        <p className="text-center">OR Sign in with</p>
        <button
          onClick={handleGoogle}
          variant="light"
          type="submit"
          className="me-4 mt-3 btn fs-3"
        >
          <FcGoogle className="mr-2 text-3xl" /> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
