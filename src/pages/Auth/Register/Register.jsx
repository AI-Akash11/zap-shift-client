import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {registerUser, updateUserProfile} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (data) => {
    console.log(data);

    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
    .then(result =>{
        console.log(result.user);

        const formData = new FormData();
        formData.append('image', profileImg);

        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`

        axios.post(image_API_URL, formData)
        .then(res=>{
          console.log(res.data.data.url)

          const userProfile = {
            displayname : data.name,
            photoURL : res.data.data.url
          }
          updateUserProfile(userProfile)
          .then(()=>{
            alert('update successful')
            navigate(location?.state || '/')
          })
          .catch(error=>{
            console.log(error)
          })
        })
    })
    .catch(error=>{
        console.log(error)
    })
  };

  return (
    <div className="max-w-md mx-auto w-full">
      {/* Title */}
      <h1 className="text-4xl font-bold">Create an Account</h1>
      <p className="text-gray-500 mb-8">Register with ZapShift</p>

      {/* Form */}
      <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">

        {/* name */}
        <div>
          <label className="font-medium">Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Name"
            className="input input-bordered w-full mt-1"
          />
          {errors.name?.type === 'required' && (
            <p className="text-red-500 text-sm mt-1">
              Name is required.
            </p>
          )}
        </div>

        {/* image */}
        <div>
          <label className="font-medium">Photo</label>
          <input
            {...register("photo", { required: true })}
            type="file"
            placeholder="Your Photo"
            className="file-input input-bordered w-full mt-1"
          />
          {errors.photo?.type === 'required' && (
            <p className="text-red-500 text-sm mt-1">
              Photo is required.
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="font-medium">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            className="input input-bordered w-full mt-1"
          />
          {errors.email?.type === "required" && (
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

        {/* Login Button */}
        <button
          type="submit"
          className="btn w-full bg-primary text-black font-semibold hover:bg-[#b5e755]"
        >
          Register
        </button>

        {/* Register link */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link state={location.state} to={'/login'} className="text-primary hover:underline cursor-pointer">
            Login
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

export default Register;
