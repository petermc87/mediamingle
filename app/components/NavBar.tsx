"use client";
import "bootstrap/js/src/collapse.js";
import Link from "next/link";
import NextNProgress from "nextjs-progressbar";
import { useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import styles from "./Navbar.module.css";

export default function NavBar() {
  const [expandLinks, setExpandLinks] = useState(false);
  return (
    <>
      <NextNProgress />
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
        className={styles.navbar}
      >
        {/* Add logo as an image here. --> currently not rendering. */}
        {/* <Image
          src="../../assets/images/logo.jpg"
          alt="logo image"
          width={15}
          height={15}
          className="card-img-left"
        /> */}
        <Container>
          {/* Modifying the toggle component to only expand the articles when its clicked */}
          <div
            className={styles.toggle}
            onClick={() => {
              if (expandLinks) {
                setExpandLinks(false);
              } else {
                setExpandLinks(true);
              }
            }}
          >
            <Navbar.Toggle aria-controls="main-navbar" />
          </div>
          {expandLinks ? (
            <div className={styles.hamburgertoggle}>
              <Nav>
                <Nav.Link as={Link} href="/">
                  Breaking
                </Nav.Link>
                {/* <Nav.Link as={Link} href="/search">
                Search
              </Nav.Link> */}
                <NavDropdown title="Categories" id="categories-dropdown">
                  <NavDropdown.Item as={Link} href="/categories/business">
                    Business
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/categories/entertainment">
                    Entertainment
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/categories/general">
                    General
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/categories/science">
                    Science
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/categories/sports">
                    Sports
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/categories/health">
                    Health
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/categories/technology">
                    Technology
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </div>
          ) : (
            ""
          )}
        </Container>
        {/* Dont show these when the page is at a certain pixel value.
         */}
        <div className={styles.container}>
          <Nav>
            <Nav.Link as={Link} href="/">
              Breaking
            </Nav.Link>
            {/* <Nav.Link as={Link} href="/search">
              Search
            </Nav.Link> */}
            <NavDropdown title="Categories" id="categories-dropdown">
              <NavDropdown.Item as={Link} href="/categories/business">
                Business
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories/entertainment">
                Entertainment
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories/general">
                General
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories/science">
                Science
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories/sports">
                Sports
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories/health">
                Health
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories/technology">
                Technology
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
      </Navbar>
    </>
  );
}
