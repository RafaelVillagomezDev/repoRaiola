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
    height: 40vh;
  }
`;

export const PortadaContainer = styled.div`
  width: 46%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:1rem;
  @media only screen and (${devices.xs}) {
    width: 100%;
  }
`;

export const PortadaTitle = styled.h1`
  font-size: 70px;
  font-weight: bold;
  padding-bottom: 18px;
  @media only screen and (${devices.xs}) {
    font-size: 33px;
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
  
`;

export const ButtonTitle = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: white;
`;
