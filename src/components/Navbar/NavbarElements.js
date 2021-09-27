import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as ArrowIconLight } from "../../images/icon-arrow-light.svg";
import { ReactComponent as ArrowIconDark } from "../../images/icon-arrow-dark.svg";

export const Nav = styled.nav`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 120px;
  width: 100%;
  background-color: transparent;
  z-index: 200;
  margin-bottom: -120px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  padding: 0 2rem;
  height: 50px;
  z-index: 200;
  position: relative;
`;

export const NavLogo = styled(Logo)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const NavMenu = (props) => {
  return <StyledNavMenu grow={props.grow}>{props.children}</StyledNavMenu>;
};

const StyledNavMenu = styled.ul`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding-left: 3rem;

  @media screen and (max-width: 860px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  list-style: none;
  display: flex;
  flex-grow: ${({ full }) => (full ? "1" : "0")};
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  position: relative;
`;

export const NavLinks = styled.a`
  display: block;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  text-decoration: none;
  color: white;
  opacity: 0.8;
  margin-right: 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 1;
    text-decoration: underline;
  }
`;

export const DropdownMenu = ({ links, show }) => {
  return (
    <StyledDropdownMenu show={show}>
      {links.map((link) => {
        return <Links href="#">{link}</Links>;
      })}
    </StyledDropdownMenu>
  );
};

const StyledDropdownMenu = styled.div`
  position: absolute;
  top: 2rem;
  left: 0;
  background: white;
  display: grid;
  justify-content: flex-start;
  width: 180px;
  padding: 1.5rem;
  border-radius: 5px;
  display: ${({ show }) => (show ? "grid" : "none")};
`;

const Links = styled.a`
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  color: hsl(208, 49%, 24%);
  text-decoration: none;
  display: block;
  width: fit-content;
  margin: 0.5rem 0;

  &:hover {
    font-weight: 700;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 860px) {
    display: block;
    cursor: pointer;
  }
`;

export const ArrowLight = ({ isUp }) => {
  {
    if (isUp)
      return (
        <ArrowIconLight style={{ transform: "scaleY(-1)" }}></ArrowIconLight>
      );
    else return <ArrowIconLight></ArrowIconLight>;
  }
};

export const ArrowDark = ({ isUp }) => {
  {
    if (isUp)
      return (
        <ArrowIconDark style={{ transform: "scaleY(-1)" }}></ArrowIconDark>
      );
    else return <ArrowIconDark></ArrowIconDark>;
  }
};

export const Aside = styled.aside`
  width: 100%;
  position: absolute;
  top: calc(120px + 1rem);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  z-index: 10;
`;

export const SidebarContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2rem;
`;

export const SidebarWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  background: white;
  border-radius: 5px;
  padding: 1rem 1.5rem;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const SideLinks = styled(NavLinks)`
  color: black;
  margin: 1rem 0.5rem;
  cursor: pointer;
`;

export const HR = styled.hr`
  width: 100%;
  margin: 1rem 0;
  margin-bottom: 0.5rem;
  border-top: 1px solid #efeff1;
`;

export const SideDropdown = ({ links, show }) => {
  return (
    <StyledSideDropdown show={show}>
      {links.map((link) => {
        return <Links href="#">{link}</Links>;
      })}
    </StyledSideDropdown>
  );
};

export const StyledSideDropdown = styled.div`
  border-radius: 5px;
  padding: 0.5rem;
  justify-content: center;
  justify-items: center;
  background: #efeff1;
  display: ${({ show }) => (show ? "grid" : "none")};
`;

export const SideItem = styled(NavItem)``;
