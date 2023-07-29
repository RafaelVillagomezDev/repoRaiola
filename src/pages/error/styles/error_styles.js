import styled from 'styled-components'
import background from "../../../../public/assets/img/robot_error.png"
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
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: red;
  padding-bottom: 2rem;
`;
export const TitleError = styled(Title)`
  font-size: 3rem;
`;


