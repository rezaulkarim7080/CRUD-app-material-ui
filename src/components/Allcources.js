import React, { useState } from "react";
import Course from "./Course";

const Allcources = () => {
  const [courses, setCourses] = useState([
    { title: "javascript course", description: "This is Javascript course" },
    { title: "Phyton course", description: "This is Phyton course" },
    { title: "Django course", description: "This is Django course" },
    { title: "PHP course", description: "This is PHP course" },
    { title: "RUBY course", description: "This is RUBY course" },
    { title: "Phyton course", description: "This is Phyton course" },
    { title: "Django course", description: "This is Django course" },
    { title: "RUBY course", description: "This is RUBY course" },
    { title: "Django course", description: "This is Django course" },
  ]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Total Courses : {courses.length}</h1>
      <h3 style={{ textAlign: "center" }}> List of course are as follows</h3>
      {courses.length > 0 ? courses.map((item) => <Course course={item} />) : "No courses"}
    </div>
  );
};

export default Allcources;
