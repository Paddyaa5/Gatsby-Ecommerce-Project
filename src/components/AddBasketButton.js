import React, { useContext, useState } from "react"
import styled from "styled-components"
//state
import { CartContext } from "../context/GlobalContextProvider"
//styles
import { StyledButton } from "../styles/globalStyles"

const AddBasketButton = styled(StyledButton)``

export default function Button({ text, title, price, image }) {
  const [disabled, setDisabled] = useState(false)
  const { cartContext, totalContext } = useContext(CartContext)
  const [cart, setCart] = cartContext
  const [total, setTotal] = totalContext

  const handleSubmit = () => {
    setDisabled(true)
    let newTotal = total + price
    setTotal(newTotal)
    setCart([
      ...cart,
      {
        title: title,
        price: price,
        image: image,
      },
    ])
    setTimeout(() => {
      setDisabled(false)
    }, 1500)
  }
  return (
    <AddBasketButton
      disabled={disabled}
      onClick={() => {
        handleSubmit()
      }}
    >
      {text}
    </AddBasketButton>
  )
}
