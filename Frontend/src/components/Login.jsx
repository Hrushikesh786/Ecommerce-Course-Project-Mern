import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}  onClick={() =>
                  document.getElementById("my_modal_3").close()
                }
                className="btn btn-sm btn-circle  btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">Login</h3>
            
            <div>
              <span className="mt-4">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="px-3 py-1 w-80 rounded-md border outline-none"
                {...register("email", { required: true })}
              ></input>
              <br/>
              {errors.email && <span className="text-red-600 text-sm">*This field is required*</span>}
            </div>
            {/* password */}
            <div>
              <span className="mt-4">Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter The Password"
                className="px-3 py-1 w-80 rounded-md border outline- one"
                {...register("password", { required: true })}
              ></input>
              <br/>
              {errors.password && <span className="text-red-600 text-sm">*This field is required*</span>}
            </div>

            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded px-3 py-1 hover:bg-pink-800">
                Login
              </button>
              <p className="mt-2">
                Not register?
                <Link
                  to={"/signup"}
                  className="underline text-blue-400 cursor-pointer hover:text-blue-800"
                >
                  Signup
                </Link>
              </p>
            </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
