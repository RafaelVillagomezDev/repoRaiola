import styled from "styled-components";
import { devices } from "../../../styles/mixin_styledComponent";
import portadaImg from "../../../../public/assets/img/portada.jpg";

export const Portada = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  
  @media only screen and (${devices.xs}) {
    height: 500px;
  }
  @media only screen and (${devices.sm}) {
    height: 680px;
  }

`;

export const ContentMain = styled.div`
  height: 100%;
  margin: 2rem 8rem;
  @media only screen and (${devices.xs}) {
    margin: 2rem 2rem;
  }
  @media only screen and (${devices.md}) {
    margin: 2rem 2rem;
  }
  @media only screen and (${devices.lg}) {
    margin: 2rem 4rem;
  }
`;

export const PortadaContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6rem;


  @media only screen and (${devices.xs}) {
    width: 100%;
  }
 
`;

export const PortadaBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

export const PortadaImg = styled.div`
  background-image: url(${portadaImg});
  width:100% ;
  height: 500px;
  min-height: 500px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 120px 360px;
 
  @media only screen and (${devices.xs}) {
    display: none;
  }
  @media only screen and (${devices.sm}) {
    display: block;
    
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
    font-size: 35px;
    padding-bottom: 14px;
  }
  @media only screen and (${devices.sm}) {
    font-size: 65px;
    font-weight: bold;
  }
  @media only screen and (${devices.lg}) {
    font-size: 67px;
  }
`;
export const PortadaContent = styled.p`
  font-size: 18px;
  line-height: 23px;
  padding-bottom: 12px;
`;

export const PortadaButton = styled.a`
  padding: 1.25em 5em;
  background-color: #4b538b;
  border-width: 2px;
  border-color: white;
  border-radius: 8em;
  margin-top: 1rem;
  text-decoration: none;
`;

export const ButtonTitle = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: white;
`;
export const SectionAbout = styled.div`
  display: flex;
  gap: 2rem;
  @media only screen and (${devices.xs}) {
    flex-direction: column;
  }
  @media only screen and (${devices.sm}) {
    flex-direction: row;
  }

`;
export const AboutContent = styled.div`
  padding: 0rem;
`;
export const AboutSkills = styled.div`
  padding: 0rem;
`;

export const CommonTitle = styled.h1`
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 1rem;
  @media only screen and (${devices.sm}) {
    font-size: 30px;
  }
`;

export const CommonTitleV1 = styled.h1`
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 1rem;
  
  @media only screen and (${devices.xs}) {
    font-size: 25px;
    text-align:start;
    
  }

  @media only screen and (${devices.sm}) {
    font-size: 30px;
    text-align: center;
  }
`;



export const CommonContent = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 2rem;
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

export const CardContainer = styled.div`
  width: 100%;
  height: auto;
  padding-top: 1.5rem;
  @media only screen and (${devices.md}) {
    flex-direction: column;
  }
 
`;

