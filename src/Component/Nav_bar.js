import React, { Component, useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import odcologo from "../odcologo.png";
import { NavLink } from "react-router-dom";
import { Map1 } from "../Map/Map1";
import Statcoop from "./Statcoop.js";
import { ReactComponentProps } from "react-router-dom";

function Nav_bar() {
  var icon = (
    <span class="logo">
      <a href="/">
        <img src={odcologo} height="70" width="290" alt="ODCO" />
      </a>
    </span>
  );

  return (
    <div>
      <Navbar>
        <Navbar.Brand>{icon}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <NavLink
                to="/Stat"
                style={{ color: "#7f8c8d", textDecoration: "none" }}
              >
                Statistiques
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/Map"
                style={{ color: "#7f8c8d", textDecoration: "none" }}
              >
                Cartographie
              </NavLink>
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Rechercher par coopérative.."
              className="mr-sm-2"
            />
            <Button variant="outline-success">Rechercher</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Nav_bar;
