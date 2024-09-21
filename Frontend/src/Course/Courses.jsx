import React from "react";
import CoursesPaid from "../components/CoursesPaid";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import list from "../../public/list.json";

const Courses = () => {
    console.log(list)
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen">
        <CoursesPaid></CoursesPaid>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Courses;
