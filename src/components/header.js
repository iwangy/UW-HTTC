import React from 'react'

import { Link } from 'gatsby'

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Image from "react-bootstrap/Image"
import logo from "../images/httc4.png"

import * as headerStyles from './header.module.scss'
import './header-support.scss'

function Header() {
  return (
    <Navbar className={headerStyles.navbarExpandLg} expand="lg" sticky="top" variant="light"
      style={{
        backgroundColor: "white",
        height: "10%",
      }}
      id="myNavbar"
    >
      <Navbar.Brand className={headerStyles.navbarBrand} >
        <Link to="/">
          <Image className={[""].join(' ')} src={logo} />
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className={["ms-auto me-3", headerStyles.navbarNav].join(' ')}>
          <NavDropdown className={[headerStyles.navLink].join(' ')} title="ABOUT" id="collapsible-nav-dropdown">
            <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/about">HTTC</NavDropdown.Item>
            <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/officers">Officers</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className={headerStyles.navLink} title="CONNECT" id="collapsible-nav-dropdown">
            <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/thing1">THING1</NavDropdown.Item>
            <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/thing2">THING2</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className={headerStyles.navLink} title="EVENTS" id="collapsible-nav-dropdown">
            <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/practices">Practices</NavDropdown.Item>
            <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/leagues">Leagues</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className={headerStyles.navLink} as={Link} to="/clubs">WHERE TO PLAY</Nav.Link>
          <Nav.Link className={headerStyles.navLink} as={Link} to="/contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;
