import React from "react";
import { Outlet } from "react-router-dom";
import * as Flowbite from "flowbite-react";
function Navbar() {
  return (
    <div className="p-5">
      <Flowbite.Navbar fluid={true} rounded={true}>
        <Flowbite.Navbar.Toggle />
        <Flowbite.Navbar.Collapse>
          <Flowbite.Navbar.Link href="/" active={true}>
            Home
          </Flowbite.Navbar.Link>
          <Flowbite.Navbar.Link href="/books">Books</Flowbite.Navbar.Link>
          <Flowbite.Navbar.Link href="/pricing">Pricing</Flowbite.Navbar.Link>
          <Flowbite.Navbar.Link href="/contact">Contact</Flowbite.Navbar.Link>
          <Flowbite.Navbar.Link href="/admin">Admin</Flowbite.Navbar.Link>
        </Flowbite.Navbar.Collapse>
      </Flowbite.Navbar>
      <Outlet />
    </div>
  );
}

export default Navbar;
