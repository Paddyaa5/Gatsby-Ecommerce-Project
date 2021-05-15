import React, { useContext } from "react"
import styled from "styled-components"
//layout
import Layout from "../../components/Layout"
//components
import ClearBasketButton from "../../components/ClearBasketButton"
import Item from "../../components/Item"
//state
import { CartContext } from "../../context/GlobalContextProvider"
//styles
import { PageStyle } from "../../styles/globalStyles"

const BasketStyle = styled.section`
  height: 100%;
  width: 100%;
  padding: 25px 50px;
  .header-section {
    height: 50px;
    margin-bottom: 10px;
    h1 {
      text-transform: uppercase;
      font-size: 30px;
    }
  }
  .item-section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 100%;
    font-family: ${props => props.theme.fonts.text};
    font-size: 12px;
    .price-header {
      width: 100px;
    }
  }
  .item-section {
    height: 45vh;
    min-height: 200px;
    width: 100%;
    overflow-y: scroll;
  }
  .value-section {
    margin-top: 10px;
    padding: 0 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
  }
`

const Basket = () => {
  const { cartContext, totalContext } = useContext(CartContext)
  const [cart] = cartContext
  const [total] = totalContext

  return (
    <Layout>
      <PageStyle>
        <BasketStyle>
          <div className="header-section">
            <h1>Shopping Cart</h1>
          </div>
          <div className="item-section-header">
            <div className="item-header">ITEM</div>
            <div className="item-header"></div>
            <div className="price-header">PRICE</div>
          </div>
          <div className="item-section">
            {cart.map(item => (
              <Item title={item.title} price={item.price} image={item.image} />
            ))}
          </div>
          <div className="value-section">
            <ClearBasketButton text="Clear Basket" />
            <h1 className="total">£{total.toFixed(2)}</h1>
          </div>
        </BasketStyle>
      </PageStyle>
    </Layout>
  )
}

export default Basket
