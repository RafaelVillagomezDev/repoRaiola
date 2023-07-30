import styled from 'styled-components'
import background from "../../../../public/assets/img/robot_error.png"
import { devices } from '../../../styles/mixin_styledComponent';
export const ErrorContainer = styled.div`
  font-size: 1.5em;
  text-align: center;
  background-color: black;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
`;
export const Container = styled.div`
  font-size: 1.5em;
  width: 70%;
  height: 70vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size:200px;
  @media only screen and (${devices.md}) {
    height: 50vh;
    background-position: bottom;
    background-size:150px;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: red;
  padding-bottom: 2rem;
`;
export const TitleError = styled(Title)`
  font-size: 3rem;
  @media only screen and (${devices.xs}) {
    font-size: 2rem;
    
  }
`;


