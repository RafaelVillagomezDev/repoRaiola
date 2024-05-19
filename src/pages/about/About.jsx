import React, { Suspense, lazy } from "react";
import LoadingScreen from "../loadingScreen/LoadingScreen";
import {
  AboutCardMe,
  BoxAbout,
  ButtonBack,
  CardMeLeft,
  CardMeRight,
  ContainerAbout,
  TextAbout,
  TextLink,
  TitleAbout,
} from "./styles/about";
const Header = lazy(() => import("../../components/Header/Header"));
const Footer = lazy(() => import("../../components/Footer/Footer"));
const CardAboutPage = lazy(() => import("../../components/CardAboutPage/CardAboutPage"));
import { IoArrowBack } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
import fondo from "../../../public/assets/img/fondo.png";

function About() {
  function historyGoBack() {
    globalThis.history.go(-1);
  }

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Header />
      <ContainerAbout>
        <BoxAbout>
          <ButtonBack onClick={historyGoBack}>
            <IoArrowBack /> volver
          </ButtonBack>
          <AboutCardMe>
            <CardMeRight >
              <LazyLoadImage alt={"fondo_about"} className="image_resize" src={fondo} />
            </CardMeRight>
            <CardMeLeft>
              <TitleAbout> Yandry Villa</TitleAbout>
              <TextAbout>
                Soy Desarrolador Web, actualmente vivo en Madrid, España. Me
                agrada la idea de trabajar en equipo, pienso que es una manera
                de conectar con nuevas habilidades y de brindar mi conocimiento
                al equipo con el fin de mejorar la productividad en el
                desarrollo de algun producto digital. Me gusta descubrir cosas
                nuevas a diario y ser un activo valioso en cualquier equipo en
                el que me desarrolle, por lo que estoy aprendiendo
                constantemente e investigando acerca de las nuevas tendencias.
                Trato de buscar todo el Feedback posible en los proyectos, con
                el fin de mejorar y poder hacer aplicaciones que ayuden a las personas .
                
              </TextAbout>

              <TextAbout> Hablemos!<TextLink to="mailto:yandry75@gmail.com?Subject=Oferta%20de%20trabajo%20" key="mailto_mail"> yandry75@gmail.com </TextLink></TextAbout>
            </CardMeLeft>
          </AboutCardMe>
        </BoxAbout>
      </ContainerAbout>
      
      <CardAboutPage/>
      <Footer/>
    </Suspense>
  );
}

export default About;
