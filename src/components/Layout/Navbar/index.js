import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">İstediğim Logo</Link>
      </div>
      <div className="right">
        <Link to="/signin">
          <Button colorScheme="blue">LOGİN</Button>
        </Link>
        <Link to="/signup">
          <Button colorScheme="blue">SİGN UP</Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
