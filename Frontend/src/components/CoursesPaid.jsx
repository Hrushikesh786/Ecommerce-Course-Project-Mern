import React, { useEffect, useState } from "react";
import list from "../../public/list.json";
import Card from "./card";
import axios from "axios";
import { Link } from "react-router-dom";
import { getBook } from "../../../Backend/controller/book.controller";

const CoursesPaid = () => {
  const [book, setBook] = useState([]);

  useEffect(()=>{
    const getBook=async()=>{
      try {
        const res=await axios.get("http://localhost:5000/book")
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error);
        
      }
    }
    getBook()
  },[])


  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Some Paid Courses
          </h1>
          <p className="mt-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In earum,
            et molestiae id eius neque rem doloremque, corrupti, veniam animi
            vitae ut ratione praesentium sit cum voluptatibus iste blanditiis
            nostrum sapiente. Saepe.
          </p>
          <Link to={"/"}  className="btn btn-secondary bg-pink-500 text-white font-bold">Back</Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {list.map((item) => (
            <Card key={item.id} item={item}></Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursesPaid;
