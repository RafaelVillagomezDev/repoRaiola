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
import { sendEmail } from "../../services/sendMail";

function Form(props) {
  const portalForm = document.body;
  
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    messague: '',
  });

  // Función para manejar cambios en los campos del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevValues)=>({
      ...prevValues,
      [name]: value
    }));
  };

  const submitEmail=async (event)=>{
    event.preventDefault();
    
    try {
      const response = await sendEmail(formData);
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
    console.log('Form values:', formData);
  }

  return createPortal(
    <ContainerForm openPortal={props.openPortal ? props.openPortal : undefined}>
      <BoxPortal>
        <BtnClosePortal onClick={props.openPortalForm}>
          <FaX style={{ color: "#FFF" }} size={"18px"} />
        </BtnClosePortal>
        <FormPortal>
            <BoxInput>
              <LabelInput htmlFor="email">Email</LabelInput>
              <InputPortal  type="text" name="email" value={formData.email}  onChange={handleChange}  id="email" />
            </BoxInput>
            <BoxInput>
              <LabelInput  htmlFor="asunto">Asunto</LabelInput>
              <InputPortal  id="subject" name="subject" type="text"   value={formData.subject} onChange={handleChange}/>
            </BoxInput>
            <BoxInput>
              <LabelInput htmlFor="mensaje" >Mensaje</LabelInput>
              <InputArea name="messague" id="messague" value={formData.messague} onChange={handleChange} />
            </BoxInput>
            <BoxInput>
              <InputSubmit  type="submit" onClick={submitEmail} value={"Enviar"}/>
            </BoxInput>
        </FormPortal>
      </BoxPortal>
    </ContainerForm>,
    portalForm
  );
}

export default Form;
