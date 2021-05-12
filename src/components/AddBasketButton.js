import React, { useContext } from "react"
import styled from "styled-components"
import { GlobalDispatchContext } from "../context/GlobalContextProvider"

const StyledButton = styled.button`
  border-radius: 25px;
  border: 3px solid black;
  margin: 20px 0;
  cursor: pointer;
  padding: 15px 30px;
  color: ${props => props.theme.colors.dark};
  font-family: ${props => props.theme.fonts.headers};
  background-color: transparent;
  transition: all 0.5s;
  &:hover {
    background-color: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.light};
  }
`

export default function Button({ text }) {
  const dispatch = useContext(GlobalDispatchContext)
  return (
    <StyledButton
      onClick={() => {
        dispatch({ type: "INCREMENT_BASKET" })
      }}
    >
      {text}
    </StyledButton>
  )
}
