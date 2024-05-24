import React, { lazy, useState } from "react";
import {
    BoxInput,
  BoxPortal,
  BtnClosePortal,
  ContainerForm,
  FormPortal,
  InputArea,
  InputPortal,
  InputSubmit,
  LabelInput,
} from "./styles/Form";
import { createPortal } from "react-dom";
import { FaX } from "react-icons/fa6";

function Form(props) {
  const portalForm = document.body;
  4;
  return createPortal(
    <ContainerForm openPortal={props.openPortal ? props.openPortal : undefined}>
      <BoxPortal>
        <BtnClosePortal onClick={props.openPortalForm}>
          <FaX style={{ color: "#FFF" }} size={"18px"} />
        </BtnClosePortal>
        <FormPortal>
            <BoxInput>
              <LabelInput htmlFor="nombre">Nombre</LabelInput>
              <InputPortal id="nombre" />
            </BoxInput>
            <BoxInput>
              <LabelInput htmlFor="email">Email</LabelInput>
              <InputPortal id="email" />
            </BoxInput>
            <BoxInput>
              <LabelInput htmlFor="nombre">Mensaje</LabelInput>
              <InputArea/>
            </BoxInput>
            <BoxInput>
              <InputSubmit value={"Enviar"}/>
            </BoxInput>
        </FormPortal>
      </BoxPortal>
    </ContainerForm>,
    portalForm
  );
}

export default Form;
