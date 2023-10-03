import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Allcources from "./Allcources";

const Course = ({ course }) => {
  return (
    <div>
      <Card style={{ border: "1px solid gray", padding: "10px", margin: "5px", textAlign: "center" }}>
        <h3>{course.title}</h3>

        <h5>{course.description}</h5>
        <Button style={{ margin: "5px" }} variant="contained" color="success" size="larg" succes>
          Delete
        </Button>
        <Button style={{ margin: "5px" }} variant="contained" size="larg">
          Update
        </Button>
      </Card>
    </div>
  );
};

export default Course;
