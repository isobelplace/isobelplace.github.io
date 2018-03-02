import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
`;

const Menu = ({pages}) => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={pages.home.url}>{pages.home.subtitle}</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href={pages.info.url}>
          {pages.info.title}
      </NavItem>
        <NavItem eventKey={2} href={pages.contact.url}>
          {pages.contact.title}
      </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Menu
