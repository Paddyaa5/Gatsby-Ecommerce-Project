import React from "react"
import styled from "styled-components"
//layout
import Layout from "../../components/Layout"
//styles
import { PageStyle } from "../../styles/globalStyles"
//components
import ClearBasketButton from "../../components/ClearBasketButton"
import Item from "../../components/Item"

const BasketStyle = styled.section`
  height: 100%;
  width: 100%;
  padding: 25px;
  .header-section {
    height: 100px;
    background: pink;
    h1 {
      text-transform: uppercase;
      font-size: 30px;
    }
  }
  .item-section {
    height: 50vh;
    min-height: 200px;
    width: 100%;
    background: orange;
    overflow-y: scroll;
  }
  .value-section {
    padding: 0 5vw;
    background: pink;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
  }
`

const Basket = () => {
  return (
    <Layout>
      <PageStyle>
        <BasketStyle>
          <div className="header-section">
            <h1>Shopping Cart</h1>
          </div>
          <div className="item-section">
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
          <div className="value-section">
            <ClearBasketButton text="Clear Basket" />
            <h1 className="total">£0.00</h1>
          </div>
        </BasketStyle>
      </PageStyle>
    </Layout>
  )
}

export default Basket
