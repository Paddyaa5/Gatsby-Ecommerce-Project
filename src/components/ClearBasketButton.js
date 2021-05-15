import React, { useContext } from "react"
import styled from "styled-components"
//state
import { CartContext } from "../context/GlobalContextProvider"
//styles
import { StyledButton } from "../styles/globalStyles"

const ClearBasketButton = styled(StyledButton)``

export default function Button({ text }) {
  const { cartContext, totalContext } = useContext(CartContext)
  const [cart, setCart] = cartContext
  const [total, setTotal] = totalContext
  console.log(cart)
  console.log(total)
  return (
    <ClearBasketButton
      onClick={() => {
        setCart([])
        setTotal(0)
      }}
    >
      {text}
    </ClearBasketButton>
  )
}
