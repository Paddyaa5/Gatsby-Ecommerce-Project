import React, { useContext } from "react"
import styled from "styled-components"
//state
import { GlobalDispatchContext } from "../context/GlobalContextProvider"
//styles
import { StyledButton } from "../styles/globalStyles"

const AddBasketButton = styled(StyledButton)``

export default function Button({ text }) {
  const dispatch = useContext(GlobalDispatchContext)
  return (
    <AddBasketButton
      onClick={() => {
        dispatch({ type: "INCREMENT_BASKET" })
      }}
    >
      {text}
    </AddBasketButton>
  )
}
