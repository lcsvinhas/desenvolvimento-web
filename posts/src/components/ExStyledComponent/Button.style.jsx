import { styled } from 'styled-components';

export const StyledButton = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: #45a049;
  }
`

export const RedButton = styled(StyledButton)`
  background-color: #f44336;
  
  &:hover {
    background-color: #d32f2f;
  }
`