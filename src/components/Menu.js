import React from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import Check from "@mui/icons-material/Check";
import Addcourse from "./Addcourse";
import About from "./About";
import Contact from "./Contact";
import Allcources from "./Allcources";

const Menu = () => {
  //   const listStyle = { textAlign: "center", border: "0.2px solid lightgray" };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/addcourses" element={<Addcourse />} />
          <Route path="/allcourses" element={<Allcources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <MenuList style={{ height: "300px", marginLeft: "50px", width: "300px" }}>
        <MenuItem>
          <ListItemText inset tag="a" href="/" style={{ fontSize: "20px", padding: "10px", borderBlockEnd: "1px solid lightgray" }}>
            Home
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset tag="a" href="/addcourses" style={{ fontSize: "20px", padding: "10px", borderBlockEnd: "1px solid lightgray" }}>
            Add Course
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset tag="a" href="/allcourses" style={{ fontSize: "20px", padding: "10px", borderBlockEnd: "1px solid lightgray" }}>
            View Course
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset tag="a" href="/about" style={{ fontSize: "20px", padding: "10px", borderBlockEnd: "1px solid lightgray" }}>
            about{" "}
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset tag="a" href="/contact" style={{ fontSize: "20px", padding: "10px", borderBlockEnd: "1px solid lightgray" }}>
            Contact
          </ListItemText>
        </MenuItem>
      </MenuList>
    </div>
  );
};

export default Menu;
