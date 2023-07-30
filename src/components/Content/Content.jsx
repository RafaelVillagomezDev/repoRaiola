import React from "react";
import { ButtonTitle, Portada, PortadaButton, PortadaContainer, PortadaContent, PortadaTitle } from "./styles/Content";


function Content(){
    return(
        <Portada>
            <PortadaContainer>
                <PortadaTitle>Full Stack Developer</PortadaTitle>
                <PortadaContent>
                    Un desarrollador web enfocado en frontend que construye el frontend de sitios web y aplicaciones web <br/> que conducen al éxito del producto en general.
                </PortadaContent>
                <PortadaButton>
                   <ButtonTitle>
                        PROYECTOS
                   </ButtonTitle>
                </PortadaButton>
            </PortadaContainer>
        </Portada>
    )
}

export default Content