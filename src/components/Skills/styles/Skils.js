import { styled } from "styled-components";
import { devices } from "../../../styles/mixin_styledComponent";

export const ContainerSkills = styled.div`
  width: 100%;
  text-align: center;

  @media only screen and (${devices.xs}) {
    padding-top: 156px;
  }
  @media only screen and (${devices.sm}) {
    padding-top: 64px;
  }
`;

export const SkillTitle = styled.p`
  color: #47d16e;
  font-family: "DM Sans", sans-serif;
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px; /* 166.667% */
  letter-spacing: 0.25px;
  @media only screen and (${devices.xs}) {
    padding-bottom: 95px;
  }
`;

export const CarrousellSkills = styled.div`
  display: flex;

  justify-content: center;
  @media only screen and (${devices.xs}) {
    flex-direction: column;
    gap: 2rem;
  }
  @media only screen and (${devices.sm}) {
    flex-direction: row;
  }
`;

export const CardSkill = styled.div`
  display: flex;
  height: auto;
  padding: 24px;
  width: 100%;
  max-width: 354px;
  align-items: flex-start;
  gap: 15px;
  border-radius: 8px;
  background-color: #1f1f21;
  @media only screen and (${devices.xs}) {
    flex-direction: column;
    gap: 2rem;
  }
  @media only screen and (${devices.sm}) {
    flex-direction: column;
  }
`;

export const CardImg = styled.img``;

export const CardTitle = styled.h3`
  color: #fff;
  font-family: "DM Sans",sans-serif;
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.25px;
  margin: 0;
`;

export const CardText = styled.p`
  color: #fff;
  font-family: "DM Sans",sans-serif;
  text-align:start;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
  letter-spacing: 0.44px;
`;
