import { styled } from "styled-components";
import { devices } from "../../../styles/mixin_styledComponent";

export const CardAboutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CardAboutBox = styled.div`
  display: flex;
  width: 967px;
  height: 405px;
  align-items: flex-start;
  gap: 32px;
  border-radius: 8px;
  border: 1.5px solid #3d3d3d;
  background: #1f1f21;
  padding: 1rem;
`;

export const CardAboutLeft = styled.div`
  width: 326.325px;
  height: 405.162px;
  
`;

export const CardAboutRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 100%;
  height: 100%;
`;

export const CardAboutTitle = styled.h5`
  color: #47d16e;
  font-family: "DM Sans", sans-serif;
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: 57px; /* 118.75% */
`;

export const CardAboutText = styled.p`
  color: #fff;
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
  letter-spacing: 0.44px;
`;

export const CardButton = styled.div`
  display: flex;
  padding: 16px 20px;
  width: 100%;
  max-width: 205px;
  justify-content: center;
  align-items: center;
  border: 2px solid #3D3D3D;
  border-radius: 8px;
  background-color: transparent;
`;
