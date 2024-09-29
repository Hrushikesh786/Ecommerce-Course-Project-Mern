import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from "react-hot-toast";

const SignUp = () => {
  const location=useLocation()
  const from =location.state?.from?.pathname || "/"
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:5000/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("signup successfully");
          navigate(from,{replace:true})
        }
        localStorage.setItem("User",JSON.stringify(res.data.user))
      })
      .catch((err) => {
        console.log(err);
        toast.error("User Exists", +err);
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        {/* <button
          className="btn"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          open modal
        </button> */}
        <div className="w-[500px]">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Sign Up</h3>
              <div>
                <span className="mt-4">Name</span>
                <br />
                <input
                  {...register("fullname", { required: true })}
                  type="fullname"
                  placeholder="Enter Your Email"
                  className="px-3 py-1 w-80 rounded-md border outline- one"
                ></input>{" "}
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-600">
                    *This field is required*
                  </span>
                )}
              </div>
              <div>
                <span className="mt-4">Email</span>
                <br />
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter Your Email"
                  className="px-3 py-1 w-80 rounded-md border outline- one"
                ></input>{" "}
                <br />
                {errors.email && (
                  <span className="text-sm text-red-600">
                    *This field is required*
                  </span>
                )}
              </div>
              {/* password */}
              <div>
                <span className="mt-4">Password</span>
                <br />
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Enter The Password"
                  className="px-3 py-1 w-80 rounded-md border outline- one"
                ></input>{" "}
                <br />
                {errors.password && (
                  <span className="text-sm text-red-600">
                    *This field is required*
                  </span>
                )}
              </div>

              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded px-3 py-1 hover:bg-pink-800">
                  Sign Up
                </button>
                <p className="mt-2 text-xl">
                  Register Already !
                  <button
                    className="underline text-blue-400 cursor-pointer hover:text-blue-800"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
