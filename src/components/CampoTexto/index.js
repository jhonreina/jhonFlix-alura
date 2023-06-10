import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
  margin:40px;
`
const StyledInput = styled.input`
  width: 100%;
  background-color: #53585d;
  color: #e5e5e5;
  border: none;
  border-radius: 4px;
  outline: none;
  padding-left: 10px;
  height: 50px;
  border-bottom: 4px solid #2A7AE4;
`;
const CampoTexto= (props) => {   
  
  const [name, setName]=  useState('')
  return (


    <StyledDiv>
      <label>{props.titulo}</label>
      <StyledInput placeholder={props.placeholder}
        onChange={(e) => {
          console.log(e.target.value)
          setName(e.target.value)
      }}
      value={name}/>
    </StyledDiv>
  
  )
}

export default CampoTexto
