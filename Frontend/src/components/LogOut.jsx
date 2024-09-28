import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const LogOut = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  const handleLogout = () => {
    try {
        setAuthUser({
            ...authUser,
            user:null
        })
        localStorage.removeItem("User")
        toast.success("Logout Successfull")
        window.location.reload()
    } catch (error) {
        toast.error("Error"+error.message)
    }
  };
  return (
    <>
      <button
        className="px-3 py-2 bg-red-500 hover:bg-red-400 rounded-md text-white font-bold"
        onClick={handleLogout}
      >
        LogOut
      </button>
    </>
  );
};

export default LogOut;
