import React from "react";
import {
  InfoContainerDark,
  InfoWrapper,
  ImgWrapperDark,
  TextWrapper,
  TextContent,
  TextHeading,
  Paragraph,
  ImageDark,
  InfoBg,
  BgPattern,
} from "../InfoSection/InfoElements";
import Img from "../../images/illustration-phones.svg";
import Pattern from "../../images/bg-pattern-circles.svg";

const InfoSectionDark = ({ reverse, dark }) => {
  return (
    <InfoContainerDark>
      <InfoBg>
        <BgPattern src={Pattern}></BgPattern>
      </InfoBg>
      <InfoWrapper>
        <ImgWrapperDark reverse={reverse}>
          <ImageDark src={Img}></ImageDark>
        </ImgWrapperDark>
        <TextWrapper>
          <TextContent>
            <TextHeading dark={dark}>
              State of the Art Infrastructure
            </TextHeading>
            <Paragraph dark={dark}>
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </Paragraph>
          </TextContent>
        </TextWrapper>
      </InfoWrapper>
    </InfoContainerDark>
  );
};

export default InfoSectionDark;
