import React from "react";
import list from "../../public/list.json"
import Card from "./card"


const CoursesPaid = () => {
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
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">{list.map((item)=>(
          <Card key={item.id} item={item}></Card>
        ))}</div>
      </div>
    </>
  );
};

export default CoursesPaid;
