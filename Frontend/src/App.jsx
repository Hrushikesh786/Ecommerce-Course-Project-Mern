import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./Course/Courses";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";
import { Navigate } from "react-router-dom";



function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser);
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/course" element={authUser ? <Courses></Courses>:<Navigate to="/signup"/>}></Route>
            <Route path="/signup" element={ <SignUp></SignUp> }></Route>
          </Routes>
          <Toaster/>
          </div>
    </>
  );
}

export default App;
//start from last video 5  minutes left
