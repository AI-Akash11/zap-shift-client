import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {
    const {signInGoogle} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = ()=>{
        signInGoogle()
        .then(result=>{
            console.log(result.user)
            navigate(location?.state || '/')
        })
        .catch(error=>{
            console.log(error)
        })
    }
  return (
    <button
    onClick={handleGoogleSignIn}
      type="button"
      className="w-full border py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-100"
    >
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        className="h-5"
      />
      <span className="text-gray-700 font-medium">Continue with Google</span>
    </button>
  );
};

export default SocialLogin;
