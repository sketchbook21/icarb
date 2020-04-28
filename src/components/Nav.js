import React from "react";
import { Navbar, Container, Image } from "react-bootstrap";

const Nav = () => {
  return (
    <Navbar expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          href="/"
          className="w-100 d-flex justify-content-between align-items-center"
        >
          <span>
            <Image
              src="/pizza.svg"
              className="pr-2 pb-1"
              style={{ height: "1.5em" }}
            />{" "}
            iCarb
          </span>
          <svg
            className="bi bi-bag-fill"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 4h14v10a2 2 0 01-2 2H3a2 2 0 01-2-2V4zm7-2.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z" />
          </svg>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Nav;
