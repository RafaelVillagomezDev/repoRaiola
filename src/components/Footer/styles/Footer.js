import styled from "styled-components";
import { devices } from "../../../styles/mixin_styledComponent";
import { Link } from "react-router-dom";
export const FooterComponent = styled.div`
  width: 100%;
  height: 80px;
  background-color: #4b538b;
  z-index: 2;
  bottom: 0px;
  left: 0;
  display:flex;
  align-items: center;
  justify-content: center;
  
  flex-direction: column;
  @media only screen and (${devices.xs}) {
    height: 60px;
  }
  @media only screen and (${devices.sm}) {
    height: 60px;
    padding: 15px 0px;
  }
`;

export const FooterTitle = styled.h3`
  font-size: 16px;
  font-family: inherit;
  font-weight: 700;
  color: white;
  @media only screen and (${devices.xs}) {
    font-size: 14px;
  }
  @media only screen and (${devices.sm}) {
    font-size: 16px;
  }
`;

export const LinkTel=styled.a`
  color: white;
  text-decoration: none;
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: black;
  gap: 12px;
  width: 100%;
`;
export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 12px;
`;

export const LinkPersonalized = styled(Link)`
  text-decoration: none;
  color: white;
  width: 28px;
  height: 28px;

  content: url(${(props) => props.contentUrl});
  &:hover {
    color: red;
  }
`;
