import styled from "styled-components";
import { devices } from "../../../styles/mixin_styledComponent";
export const Portada = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0rem 2rem;

  @media only screen and (${devices.xs}) {
    height: 33vh;
    padding: 1rem 2rem;
  }
`;

export const ContentMain = styled.div`
  height: 100vh;
`;

export const PortadaContainer = styled.div`
  width: 46%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media only screen and (${devices.xs}) {
    width: 100%;
    gap: 0rem;
  }
`;

export const PortadaTitle = styled.h1`
  font-size: 70px;
  font-weight: bold;
  padding-bottom: 18px;
  @media only screen and (${devices.xs}) {
    font-size: 25px;
    padding-bottom: 14px;
  }
  @media only screen and (${devices.sm}) {
    font-size: 70px;
    font-weight: bold;
  }
`;
export const PortadaContent = styled.p`
  font-size: 18px;
  line-height: 23px;
  padding-bottom: 12px;
`;

export const PortadaButton = styled.button`
  padding: 1.25em 5em;
  background-color: #4b538b;
  border-width: 2px;
  border-color: white;
  border-radius: 8em;
  margin-top: 1rem;
`;

export const ButtonTitle = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: white;
`;
export const SectionAbout = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 2rem;
  @media only screen and (${devices.xs}) {
    flex-direction: column;
    gap: 1rem;
    padding: 8px;
  }
  @media only screen and (${devices.sm}) {
    flex-direction: row;
    gap: 1rem;
  }
`;
export const AboutContent = styled.div`
  padding: 1.5rem;
`;
export const AboutSkills = styled.div`
  padding: 1.5rem;
`;



export const CommonTitle = styled.h1`
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 1rem;
`;
export const CommonContent = styled.p`
  font-size: 18px;
  font-weight: 400;
  padding: 0.3rem;
  line-height: 1.3rem;
`;

export const ContentSkill = styled.div`
  flex-wrap: wrap;
  display: flex;
  gap: 2rem;
`;

export const BoxSkill = styled.div`
  border-radius: 2px;
  text-align: center;
  padding: 0.25rem 1rem;
  border-radius: 12px;
  gap: 1rem;
  background-color: orange;
`;
