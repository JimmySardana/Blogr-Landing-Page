import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  Header,
  TextWrapper,
  TextContent,
  ImgWrapper,
  TextHeading,
  Paragraph,
  ImageDesktop,
  ImageMobile,
} from "./InfoElements";

const InfoSection = ({
  id,
  header,
  textHeading1,
  paragraph1,
  textHeading2,
  paragraph2,
  imageDesktop,
  imageMobile,
  reverse,
}) => {
  return (
    <InfoContainer>
      <InfoWrapper>
        <Header>{header}</Header>
        <TextWrapper reverse={reverse}>
          <TextContent>
            <TextHeading>{textHeading1}</TextHeading>
            <Paragraph>{paragraph1}</Paragraph>
          </TextContent>
          <TextContent>
            <TextHeading>{textHeading2}</TextHeading>
            <Paragraph>{paragraph2}</Paragraph>
          </TextContent>
        </TextWrapper>
        <ImgWrapper reverse={reverse}>
          <ImageDesktop src={imageDesktop}></ImageDesktop>
          <ImageMobile src={imageMobile}></ImageMobile>
        </ImgWrapper>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
