import styled from "styled-components";
import { ReactComponent as BackgroundIntro } from "../../images/bg-pattern-intro.svg";

export const HeroContainer = styled.section`
  width: 100%;
  height: 800px;
  border-bottom-left-radius: 100px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  width: 100%;
  height: 800px;
  background: linear-gradient(
    to right,
    hsl(13, 100%, 72%),
    hsl(353, 100%, 62%)
  );
  background-size: cover;
  position: relative;
  overflow: hidden;
`;

export const ImageBg = styled.img`
  position: absolute;
  object-fit: cover;
  transform: translate(-15%, -40%);
`;

export const HeroContent = styled.div`
  position: absolute;
  color: white;
  max-width: 1100px;
  display: grid;
  padding: 0.5rem 2rem;
  justify-content: center;
  align-content: center;
  text-align: center;
  grid-template-rows: repeat(3, auto);
  z-index: 10;
`;

export const HeroH1 = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

export const HeroH4 = styled.h4`
  font-size: 1.3rem;
  font-weight: 300;
  margin-bottom: 1rem;
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
