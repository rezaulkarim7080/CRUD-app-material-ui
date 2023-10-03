import React from "react";
import { Container, Form } from "reactstrap";
import Button from "@mui/material/Button";

const Addcourse = () => {
  const btnStyle = { height: "30px", width: "400px", margin: "5px" };

  return (
    <div>
      <Container>
        <h1 style={{ textAlign: "center", color: "green" }}>Add Course Details</h1>
        <form style={{ border: "1px solid gray", padding: "10px", margin: "5px", backgroundColor: "rgb(243, 243, 243)" }}>
          <p>Course Id</p>

          <input style={btnStyle} type="text" name="id" placeholder="Your ID" />
          <p>Course Title</p>
          <input style={btnStyle} type="text" name="name" placeholder="course-title" />
          <p>Course Description</p>
          <input style={btnStyle} type="text-area" name="name" placeholder="course-description" />
          <br></br>
          <br></br>
          <Button style={{ textAlign: "center", margin: "5px" }} color="success" variant="contained">
            Add course
          </Button>
          <Button style={{ textAlign: "center", margin: "5px" }} color="warning" variant="contained">
            Clear
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Addcourse;
