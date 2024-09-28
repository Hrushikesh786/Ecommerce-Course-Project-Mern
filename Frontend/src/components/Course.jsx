import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json";
import Slider from "react-slick";
import Card from "./card";
import axios from "axios";
import { getBook } from "../../../Backend/controller/book.controller";

const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:5000/book");  
        const data = list.filter((data) => data.category === "Free");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  });

  //Here suppose you are in excel and free you are searching

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mb-10">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Course</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, ea
            libero iure quibusdam nisi autem, illo necessitatibus sequi
            assumenda unde quasi iusto eveniet, commodi consequuntur obcaecati
            aperiam doloremque a explicabo!
          </p>
        </div>

        {/* ------------------------------------------------------------------------------------------- */}
        {/* cards */}

        <div className="slider-container">
          <Slider {...settings}>
            {book.map((item) => (
              <Card item={item} key={item.id}></Card>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Course;
