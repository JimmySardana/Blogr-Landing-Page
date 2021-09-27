import React, { useState } from "react";
import {
  SideLinks,
  Aside,
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SideItem,
  ArrowDark,
  HR,
  SideDropdown,
} from "./NavbarElements";
import { Button } from "../Button";
import { product, company, connect } from "./Data";

const Sidebar = () => {
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

  return (
    <Aside>
      <SidebarContainer>
        <SidebarWrapper>
          <SidebarMenu>
            <SideItem>
              <SideLinks onClick={toggle1}>Product</SideLinks>
              <ArrowDark isUp={open1}></ArrowDark>
            </SideItem>
            <SideDropdown show={open1} links={product}></SideDropdown>
            <SideItem>
              <SideLinks onClick={toggle2}>Company</SideLinks>
              <ArrowDark isUp={open2}></ArrowDark>
            </SideItem>
            <SideDropdown show={open2} links={company}></SideDropdown>
            <SideItem>
              <SideLinks onClick={toggle3}>Connect</SideLinks>
              <ArrowDark isUp={open3}> </ArrowDark>
            </SideItem>
            <SideDropdown show={open3} links={connect}></SideDropdown>
          </SidebarMenu>
          <HR></HR>
          <SidebarMenu>
            <SideItem>
              <SideLinks href="#">Login</SideLinks>
            </SideItem>
            <SideItem>
              <Button primary={true}>Sign Up</Button>
            </SideItem>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </Aside>
  );
};

export default Sidebar;
