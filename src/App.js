import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Navbar/Sidebar";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import InfoSectionDark from "./components/InfoSectionDark";
import FooterSection from "./components/FooterSection";
import { infoObjOne, infoObjTwo } from "./components/InfoSection/Data";
import ImgOneDesktop from "./images/illustration-editor-desktop.svg";
import ImgOneMobile from "./images/illustration-editor-mobile.svg";
import ImgTwoDesktop from "./images/illustration-laptop-desktop.svg";
import ImgTwoMobile from "./images/illustration-laptop-mobile.svg";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Navbar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      ></Navbar>
      {showSidebar && <Sidebar></Sidebar>}
      <HeroSection></HeroSection>
      <InfoSection
        {...infoObjOne}
        imageDesktop={ImgOneDesktop}
        imageMobile={ImgOneMobile}
        reverse={false}
      ></InfoSection>
      <InfoSectionDark reverse={true} dark={true}></InfoSectionDark>
      <InfoSection
        {...infoObjTwo}
        imageDesktop={ImgTwoDesktop}
        imageMobile={ImgTwoMobile}
        reverse={true}
      ></InfoSection>
      <FooterSection></FooterSection>
    </>
  );
}

export default App;
