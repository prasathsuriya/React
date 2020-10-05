import React from 'react'
import styled from 'styled-components'

const Division = styled.div`
  position: relative;
  padding: 10px 0 10px 0;
  margin-left: 15px;
  margin:10px 2.5px;
  border-bottom: 2px solid #999;
  width: 180px;
`;

const Input1 = styled.input`
  outline: none;
  border: none;
 
  margin:1% 90% 0 0;
  background:transparent;
  font-size: 15px;
  &:focus ~ Label{
      transform:translate(-10%,-70%);
      color:#0af;
  }
`;
const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  transition: 0.6s;
`;
const Input = (props) => {
    return (
        <Division>
            <Input1 
                type="text"
                name="email"
                
            />
            <Label>{props.label}</Label>
        </Division>
    )
}
export default Input;