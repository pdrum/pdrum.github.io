import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavbarItem from "./NavbarItem";
import {FaBlog, FaHome, FaMedium, FaYoutube} from "react-icons/fa";
import * as styles from '../styles/my-navbar.module.css'

export default function MyNavbar() {
  return (
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={`bg-secondary ${styles.toggleButton}`} />
          <Navbar.Collapse>
            <Nav className="mx-auto">
              <NavbarItem linkAddress="/" text="Home" ><FaHome/></NavbarItem>
              <NavbarItem linkAddress="/medium" text="Medium"><FaMedium/></NavbarItem>
              <NavbarItem linkAddress="/youtube" text="Youtube"><FaYoutube/></NavbarItem>
              <NavbarItem linkAddress="/blog" text="Blog"><FaBlog/></NavbarItem>
              <NavbarItem linkAddress="/resume" text="Resume"><FaBlog/></NavbarItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
