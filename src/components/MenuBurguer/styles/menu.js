import {styled, keyframes } from "styled-components";
import { devices } from "../../../styles/mixin_styledComponent";
import { Link } from "react-router-dom";
  
export const BtnTitle=styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: whitesmoke;
  font-weight: bold;
  cursor: pointer;
  font-family:"Poppins",sans-serif;
  @media only screen and (${devices.xs}) {
    display: none;
  }
  @media only screen and (${devices.sm}) {
    display: block;
  }
  
`

/*Menu Hamburguer*/

export const BtnBurguer=styled.button`
   width:100%;
   background-color: transparent;
   border: none;
   height: 30px;
  @media only screen and (${devices.xs}) {
    display:block;
    height: 30px;
  }

  @media only screen and (${devices.sm}) {
    display:none;
  }

`
// Define keyframes for the animation
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;
/*Menu Burguer*/
export const MenuBurguer = styled.div`
  width: 50%;
  top: 0;
  left: ${({ isClicked }) => (isClicked ? '0' : '-100%')};
  position: fixed;
  height: 100%;
  background-color: white;
  z-index: 2;
  padding: 15px;
  transition: left 0.5s ease;
  animation: ${({ isClicked }) => (isClicked ? slideIn : slideOut)} 0.5s ease forwards;
  @media only screen and (${devices.xs}) {
    width: 50%;
  }
  @media only screen and (${devices.sm}) {
     width:25%;
  }

  @media only screen and (${devices.lg}) {
     width:20%;
  }
 
`;
export const HeaderMenuBurguer = styled.div`
  width: 100%;
  height: 75px;
`;
export const BtnCloseMenu = styled.button`
  float: right;
  background-color: transparent;
  border: none;
  height: 30px;
  cursor: pointer;
`;

export const ContainerList = styled.div`
  column-gap: 0.2rem;
  width: 100%;
  height: 100%;
`;
export const ListMenu = styled.ul`
   height: 75%;
`;

export const List = styled.li`
  line-height: 2rem;
  margin-bottom: 1rem;
  list-style: none;
  padding: 0rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkList = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  display: flex;
  gap: 0.3rem;
  align-items: center;
  align-content: center;
  &:hover {
    color: orange;
  }

  @media only screen and (${devices.xs}) {
    font-size:18px;
    
  }
  @media only screen and (${devices.sm}) {
     font-size: 22px;
  }
`;

export const ListLink=styled.div`
   background-color: rebeccapurple;
   width: 100%;
   height: 100%;

`
export const ContainerLink=styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   align-content: center;
   column-gap: 1rem;
`

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

