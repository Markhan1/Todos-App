import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/todos">Todo List</NavLink>
          <span>|</span>
          <NavLink to="/create">Create Todo</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
