import React from 'react'
import { IMaskInput } from 'react-imask'
import styled from 'styled-components'

const StyledInput = styled(IMaskInput)`
  background-color: #fff;
  color: #000;
  border: none;
  height: 32px;
  padding: 0 8px;
  font-size: 14px;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 8px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;

  &::placeholder {
    color: #a8a8a8;
  }
`

const MaskedInput = ({ mask, value, onChange, placeholder, required, maxLength }) => (
  <StyledInput
    mask={mask}
    value={value}
    onAccept={(val) => onChange({ target: { value: val } })}
    placeholder={placeholder}
    required={required}
    maxLength={maxLength}
  />
)

export default MaskedInput

