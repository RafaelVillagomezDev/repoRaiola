import React from "react";
import { useRouteError } from "react-router-dom";
import { Container, ErrorContainer, Title, TitleError } from "./styles/error_styles";

export default function ErrorPage() {
  const error = useRouteError();
  
  let errorMsg=error
 console.log(errorMsg)

  // <i>{error.statusText || error.message}</i>
  return (
    <div id="error-page">
      <ErrorContainer>
        <Container >
         <Title>
           Error
         </Title>
         <TitleError>
            {errorMsg ? errorMsg.data.split(":")[1]: 'No hay ningun error , revisar logs'}
         </TitleError>
        </Container>
      </ErrorContainer>
    </div>
  );
}