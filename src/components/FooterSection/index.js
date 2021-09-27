import React from "react";
import {
  Footer,
  FooterContainer,
  FooterLogo,
  FooterMenu,
  FooterItem,
  ItemHead,
  Links,
  Logo,
} from "./FooterElements";
import LogoImg from "../../images/logo.svg";

const FooterSection = () => {
  return (
    <Footer>
      <FooterContainer>
        <FooterLogo>
          <Logo src={LogoImg}></Logo>
        </FooterLogo>
        <FooterMenu>
          <FooterItem>
            <ItemHead>Product</ItemHead>
            <Links
              links={[
                "Overview",
                "Pricing",
                "Marketplace",
                "Features",
                "Integrations",
              ]}
            ></Links>
          </FooterItem>
          <FooterItem>
            <ItemHead>Company</ItemHead>
            <Links links={["About", "Team", "Blog", "Careers"]}></Links>
          </FooterItem>
          <FooterItem>
            <ItemHead>Connect</ItemHead>
            <Links links={["Contact", "Newsletter", "LinkedIn"]}></Links>
          </FooterItem>
        </FooterMenu>
      </FooterContainer>
    </Footer>
  );
};

export default FooterSection;
