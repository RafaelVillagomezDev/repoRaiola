import styled from "styled-components";
import { Link } from "react-router-dom";
export const HeaderContainer = styled.div`
  font-size: 1.5em;
  text-align: center;
  background-color: #4b538b;
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerElement = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const NavPersonalized = styled.div`
  display: flex;
  justify-content:space-around;
  gap: 1.75rem;
`;





export const LinkPersonalized = styled(Link)`
  text-decoration: none;
  color: white;
  width: 28px;
  height: 28px;
  content: url(${props =>(props.contentUrl)});
  &:hover {
    color: red;
  }
`;



/*Toggle */

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: black;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "🌝";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 55%;
    left: 4px;
    transform: translate(0, -50%);
  }
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: white;

    &:before {
      transform: translate(32px, -50%);
      content: "🌚";
      position: absolute;
      width: 28px;
      height: 28px;
    }
  }
`;
