import React, { useState, createContext } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  return (
    <CartContext.Provider
      value={{ cartContext: [cart, setCart], totalContext: [total, setTotal] }}
    >
      {children}
    </CartContext.Provider>
  )
}
