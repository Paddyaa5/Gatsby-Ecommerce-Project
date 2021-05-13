import React, { useContext } from "react"
import styled from "styled-components"
//state
import { GlobalDispatchContext } from "../context/GlobalContextProvider"
//styles
import { StyledButton } from "../styles/globalStyles"

const ClearBasketButton = styled(StyledButton)``

export default function Button({ text }) {
  const dispatch = useContext(GlobalDispatchContext)
  return (
    <ClearBasketButton
      onClick={() => {
        dispatch({ type: "CLEAR_BASKET" })
      }}
    >
      {text}
    </ClearBasketButton>
  )
}
