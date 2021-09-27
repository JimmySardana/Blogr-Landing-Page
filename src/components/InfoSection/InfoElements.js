import styled from "styled-components";

export const InfoContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const InfoContainerDark = styled(InfoContainer)`
  @media screen and (max-width: 768px) {
    padding: 0 0 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1100px;
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 1.5rem));
  align-content: center;
  justify-content: center;
  column-gap: 3rem;
  grid-template-rows: auto 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
    row-gap: 2rem;
    column-gap: 0;
    justify-content: stretch;
  }
`;

export const Header = styled.h1`
  position: relative;
  top: 7rem;
  text-align: center;
  font-size: 2.2rem;
  grid-area: 1 / 1 / 2 / 3;
  @media screen and (max-width: 768px) {
    grid-area: 1 / 1 / 2 / 2;
    top: 0;
  }
`;

export const TextWrapper = styled.div`
  order: ${({ reverse }) => (reverse ? 10 : 0)};
  display: grid;
  grid-template-rows: repeat(2, fit-content);
  align-content: center;
  row-gap: 3rem;
  padding: 200px 0;
  @media screen and (max-width: 768px) {
    justify-items: center;
    padding: 0;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ reverse }) => (reverse ? "flex-end" : "flex-start")};
  right: ${({ reverse }) => (reverse ? "-40px" : "auto")};
  position: relative;
  @media screen and (max-width: 1100px) {
    left: ${({ reverse }) => (reverse ? "auto" : "-100px")};
    right: ${({ reverse }) => (reverse ? "-140px" : "auto")};
  }

  @media screen and (max-width: 768px) {
    left: -2rem;
    right: 0;
    width: calc(100% + 4rem);
    overflow: hidden;
    order: -1;
  }
`;

export const ImgWrapperDark = styled(ImgWrapper)`
  right: auto;
  left: auto;
  @media screen and (max-width: 1100px) {
    left: auto;
    right: -60px;
  }
  @media screen and (max-width: 768px) {
    right: auto;
    left: -2rem;
  }
`;

export const TextContent = styled.div`
  margin: 1rem 0;
  max-width: 480px;
  z-index: 100;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const TextHeading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: hsl(208, 49%, 24%);
  color: ${({ dark }) => (dark ? "white" : "hsl(208, 49%, 24%)")};
`;

export const Paragraph = styled.p`
  line-height: 1.5rem;
  color: hsl(207, 13%, 34%);
  color: ${({ dark }) => (dark ? "white" : "hsl(207, 13%, 34%)")};
  font-weight: 300;
`;

export const Image = styled.img`
  transition: all 0.5s ease-in-out;
  @media screen and (max-width: 1100px) {
    transition: all 0.5s ease-in-out;
    transform: scale(0.8);
  }
`;

export const ImageDark = styled(Image)`
  @media screen and (max-width: 768px) {
    width: 100%;
    transform: scale(1);
  }
`;
export const ImageDesktop = styled(Image)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ImageMobile = styled.img`
  display: none;
  @media screen and (max-width: 768px) {
    display: inline;
    width: 100%;
  }
`;

export const InfoBg = styled.div`
  position: absolute;
  top: 15%;
  left: 0;
  width: 100%;
  height: 64%;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 100px;
  background: linear-gradient(to right, hsl(237, 17%, 21%), hsl(237, 23%, 32%));
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    top: auto;
    bottom: 0;
    height: 67%;
  }
  @media screen and (max-width: 500px) {
    top: auto;
    bottom: 0;
    height: 77%;
  }
`;

export const BgPattern = styled.img`
  position: relative;
  transform: translate(-20%, -50%);
  left: 0;
  width: 80%;
  transition: all 0.4s ease-in-out;

  @media screen and (max-width: 840px) {
    width: 100%;
    transition: all 0.4s ease-in-out;
  }
  @media screen and (max-width: 768px) {
    transform: translate(-50%, -40%);
    width: 150%;
    left: 50%;
  }
`;
