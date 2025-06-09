import styled from 'styled-components'

export const FormContainer = styled.div`
  background-color: #fff;
  padding: 32px;
  width: 360px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Input = styled.input`
  background-color: #fff;
  border: 1px solid #ccc;
  height: 32px;
  padding: 0 8px;
  font-size: 14px;
`

export const Button = styled.button`
  background-color: #e66767;
  color: #fff;
  font-weight: bold;
  border: none;
  height: 32px;
  margin-top: 8px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #cf5a5a;
  }
`

