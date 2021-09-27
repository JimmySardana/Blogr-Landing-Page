import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  DropdownMenu,
  NavMenu,
  NavLinks,
  NavItem,
  MobileIcon,
  ArrowLight,
} from "./NavbarElements";
import { Button } from "../Button";
import { ReactComponent as Hamburger } from "../../images/icon-hamburger.svg";
import { ReactComponent as Cross } from "../../images/icon-close.svg";
import Sidebar from "./Sidebar";
import { company, product, connect } from "./Data";

const Navbar = ({ showSidebar, setShowSidebar }) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const toggle1 = () => {
    toggle();
    setOpen1(!open1);
  };
  const toggle2 = () => {
    toggle();
    setOpen2(!open2);
  };
  const toggle3 = () => {
    toggle();
    setOpen3(!open3);
  };

  const toggle = () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
  };

  const handleResize = () => {
    if (window.innerWidth <= 860) {
      toggle();
    } else {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo></NavLogo>
        <NavMenu>
          <NavItem>
            <NavLinks dropdown={true} onClick={toggle1} href="#">
              Product
            </NavLinks>
            <ArrowLight isUp={open1}></ArrowLight>
            <DropdownMenu show={open1} links={product}></DropdownMenu>
          </NavItem>
          <NavItem>
            <NavLinks dropdown={true} onClick={toggle2} href="#">
              Company
            </NavLinks>
            <ArrowLight isUp={open2}></ArrowLight>
            <DropdownMenu show={open2} links={company}></DropdownMenu>
          </NavItem>
          <NavItem>
            <NavLinks dropdown={true} onClick={toggle3} href="#">
              Connect
            </NavLinks>
            <ArrowLight isUp={open3}></ArrowLight>
            <DropdownMenu show={open3} links={connect}></DropdownMenu>
          </NavItem>
          <NavItem full={true}></NavItem>
          <NavItem>
            <NavLinks href="#">Login</NavLinks>
          </NavItem>
          <Button>Sign Up</Button>
        </NavMenu>
        <MobileIcon>
          {!showSidebar && (
            <Hamburger onClick={() => setShowSidebar(!showSidebar)}></Hamburger>
          )}
          {showSidebar && (
            <Cross onClick={() => setShowSidebar(!showSidebar)}></Cross>
          )}
        </MobileIcon>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
