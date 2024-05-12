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
  width: 100%;
`;

export const CardAbout = styled.div`
  display: flex;
  width: 354px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  border-radius: 8px;
  background-color: #1f1f21;
`;
