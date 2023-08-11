import styled from "styled-components";
import { devices } from "../../../styles/mixin_styledComponent";
import portadaImg from "../../../../public/assets/img/portada.jpg";
export const Portada = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;


  @media only screen and (${devices.xs}) {
    height: 56vh;
    padding: 0rem 2rem;
    margin: 2rem 0rem;
  }
  @media only screen and (${devices.sm}) {
    height: 70vh;
    padding: 0rem 2rem;
  }
  @media only screen and (${devices.md}) {
    height: 50vh;
    padding: 2rem 2rem;
  }
  @media only screen and (${devices.lg}) {
    height: 72vh;
    padding: 2rem 5rem;
    margin: 0rem 10rem;
  }
`;

export const ContentMain = styled.div`
  height: 100vh;
`;

export const PortadaContainer = styled.div`
  width: 50%;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  @media only screen and (${devices.xs}) {
    width: 100%;
    gap: 0rem;
  }
  @media only screen and (${devices.sm}) {
    gap: 5rem;
  }
  @media only screen and (${devices.md}) {
    gap: 1rem;
  }
`;

export const PortadaBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

export const PortadaImg = styled.img`
  background-image: url(${portadaImg});
  width: 100%;
  height: auto;
  min-height: 500px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius:20px 1500px;
  @media only screen and (${devices.xs}) {
    display: none;
  }
  @media only screen and (${devices.sm}) {
    display: block;
    
  }
  @media only screen and (${devices.md}) {
    display: block;
    border-radius:20px 1500px;
    
  }

 

  
`;

export const PortadaImgMobile = styled.img`
  background-image: url(${portadaImg});
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-repeat: no-repeat;
  background-position:center;
  background-size: cover;
  margin: 1rem;
  @media only screen and (${devices.xs}) {
    display: block;
  }
  @media only screen and (${devices.sm}) {
    display: none;
  }
`;

export const PortadaTitle = styled.h1`
  font-size: 70px;
  font-weight: bold;
  padding-bottom: 18px;
  color: orange;
  -webkit-text-stroke: 1px black;
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
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media only screen and (${devices.xs}) {
    flex-direction: column;
    gap: 2rem;
    padding: 0rem 2rem;
  }
  @media only screen and (${devices.sm}) {
    flex-direction: row;
    gap: 1rem;
    padding: 0rem 2rem;
  }
  @media only screen and (${devices.md}) {
    flex-direction: row;
    gap: 1rem;
    margin: 0rem;
  }
  @media only screen and (${devices.lg}) {
    flex-direction: row;
    gap: 1rem;
    padding: 0rem 5rem;
    margin: 0rem 10rem;
  }
`;
export const AboutContent = styled.div`
  padding: 0rem;
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
  line-height: 1.3rem;
  text-align: justify;
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
