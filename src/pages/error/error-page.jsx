import React from "react";
import { useRouteError } from "react-router-dom";
import { Container, ErrorContainer, Title, TitleError } from "./styles/error_styles";
import { Helmet } from 'react-helmet-async';

export default function ErrorPage() {
  const error = useRouteError();
  
  let errorMsg=error
 console.log(errorMsg)

  // <i>{error.statusText || error.message}</i>
  return (
    <div id="error-page">
     <Helmet>
     <title>404 | Página No Encontrada - Yandry Dev</title>
      <meta name="description" content="La página que buscas no se encuentra disponible. Explora el portafolio de Yandry, un ingeniero de software especializado en desarrollo web y aplicaciones web." />
      <meta name="keywords" content="404, página no encontrada, error, ingeniero de software, desarrollador web, portafolio, desarrollo web, aplicaciones web" />
      <link rel="canonical" href="https://yandrydev.es/404" />
      <link rel="icon" href="https://yandrydev.es/favicon.ico" />
      <meta name="robots" content="noindex, follow" />
    </Helmet>
      <ErrorContainer id="error-main">
        <Container className="error-container" >
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