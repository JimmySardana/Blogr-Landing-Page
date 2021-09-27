import React from "react";
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroH1,
  HeroH4,
  HeroBtnWrapper,
} from "./HeroElements";
import { Button } from "../Button";
import BackgroundIntro from "../../images/bg-pattern-intro.svg";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src={BackgroundIntro}></ImageBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>A modern publishing platform</HeroH1>
        <HeroH4>Grow your audience and build your online brand</HeroH4>
        <HeroBtnWrapper>
          <Button>Start for Free</Button>
          <Button primary="true">Learn More</Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
