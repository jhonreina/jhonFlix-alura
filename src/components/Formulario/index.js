import React from 'react'

import styled from 'styled-components';
import CampoTexto from '../CampoTexto';

const StyledForm = styled.form`
    width:100%;
`

const StyledH3 = styled.h3`
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 70px;
  display:flex;
  justify-content:center;
  margin:80px 0;

  `


const Formulario = () => {
  return (
    <section>
      <StyledForm>
        <StyledH3>Nuevo Video</StyledH3>
        <CampoTexto
          titulo="Titulo"
          placeholder="Titulo" />
        <CampoTexto 
          titulo="Link del video"
          placeholder="Link del video" />
        <CampoTexto
          titulo="Link imagen del video"
          placeholder="link imagen del video"
        />
        <CampoTexto
          titulo="Código de seguridad"
          placeholder="Código de seguridad"
        />
      </StyledForm>
    </section>
  );
}

export default Formulario
