import { styled, keyframes } from "styled-components";
import { devices } from "../../../styles/mixin_styledComponent";

export const AboutContainer = styled.div`
  width: 100%;

`;

export const AboutTitle = styled.h3`
  font-family: "DM Sans", sans-serif;
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px; /* 117.647% */
  letter-spacing: 0.25px;
  color: #47d16e;
  padding: 128px 0px;
  text-align: center;
`;

export const BoxAbout = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  
  @media only screen and (${devices.xs}) {
    align-items: center;
    flex-direction: column;
    margin: 3rem;
  }
  @media only screen and (${devices.sm}) {
    flex-wrap: wrap;
    flex-direction: row;
    margin: 2rem;
  }
`;

export const CardAbout = styled.div`
  padding: 24px;
  gap: 15px;
  border-radius: 8px;
  background-color: #1f1f21;
  @media only screen and (${devices.xs}) {
    max-width: 329px;
    width: 100%;
  }
  @media only screen and (${devices.sm}) {
    flex: 1 1 30%;
    max-width: 23%;
  }
`;
