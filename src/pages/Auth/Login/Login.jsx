import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {signInUser} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    console.log(data);

    signInUser(data.email, data.password)
    .then(result=>{
        console.log(result)
        navigate(location?.state || '/')
    })
    .catch(error=>{
        console.log(error)
    })
  };

  return (
    <div className="max-w-md mx-auto w-full">
      {/* Title */}
      <h1 className="text-4xl font-bold">Welcome Back</h1>
      <p className="text-gray-500 mb-8">Login with ZapShift</p>

      {/* Form */}
      <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
        {/* Email */}
        <div>
          <label className="font-medium">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            className="input input-bordered w-full mt-1"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              Email is required.
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="font-medium">Password</label>
          <input
            {...register("password", {
              required: true,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
            })}
            type="password"
            placeholder="Password"
            className="input input-bordered w-full mt-1"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              Must include uppercase, lowercase, number & special character.
            </p>
          )}
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end">
          <button
            type="button"
            className="text-primary text-sm hover:underline"
          >
            Forgot password?
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="btn w-full bg-primary text-black font-semibold hover:bg-[#b5e755]"
        >
          Login
        </button>

        {/* Register link */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link state={location.state} to={'/register'} className="text-primary hover:underline cursor-pointer">
            Register
          </Link>
        </p>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Google Login */}
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Login;
