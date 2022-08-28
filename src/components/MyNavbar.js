import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavbarItem from "./NavbarItem";
import {FaBlog, FaHome, FaMedium, FaYoutube} from "react-icons/fa";

export default function MyNavbar() {
  return (
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-secondary" />
          <Navbar.Collapse>
            <Nav className="mx-auto">
              <NavbarItem linkAddress="" text="Home" ><FaHome/></NavbarItem>
              <NavbarItem linkAddress="" text="Medium"><FaMedium/></NavbarItem>
              <NavbarItem linkAddress="" text="Youtube"><FaYoutube/></NavbarItem>
              <NavbarItem linkAddress="" text="Blog"><FaBlog/></NavbarItem>
              <NavbarItem linkAddress="" text="Resume"><FaBlog/></NavbarItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
