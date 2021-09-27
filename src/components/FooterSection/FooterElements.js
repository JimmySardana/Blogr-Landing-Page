import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  min-height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: hsl(240, 10%, 16%);
  border-top-right-radius: 100px;
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  padding: 2rem;
  padding-top: 4rem;
  padding-bottom: 1rem;
  display: flex;

  @media screen and (max-width: 560px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterLogo = styled.div``;

export const FooterMenu = styled.ul`
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 560px) {
    flex-direction: column;
    padding: 3rem;
    justify-content: center;
  }
`;

export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const ItemHead = styled.li`
  list-style: none;
  color: white;
  margin-bottom: 1.8rem;
  @media screen and (max-width: 560px) {
    display: block;
    margin: 1.5rem 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Links = (props) => {
  return (
    <StyledLinks>
      {props.links.map((link) => {
        return <Link href="#">{link}</Link>;
      })}
    </StyledLinks>
  );
};

const StyledLinks = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a`
  display: block;
  cursor: pointer;
  font-family: "Ubuntu", sans-serif;
  text-decoration: none;
  margin: 0.5rem 0;
  font-weight: 300;
  color: hsl(240, 2%, 79%);
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: underline;
    filter: brightness(1.2);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 560px) {
    text-align: center;
  }
`;

export const Logo = styled.img``;
