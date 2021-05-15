import React, { useContext } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { CartContext } from "../context/GlobalContextProvider"
import {
  FaShoppingCart,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa"

const StyledSidebar = styled.section`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  min-height: 500px;
  height: 100vh;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5vh 30px;
  .nav-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 46px;
      color: ${props => props.theme.colors.dark};
      margin-bottom: 30px;
    }
    .cart-section {
      position: relative;
      display: flex;
      justify-content: center;
      svg {
        position: absolute;
        z-index: 1;
        font-size: 30px;
      }
      .circle {
        position: absolute;
        left: 10px;
        top: -12px;
        border-radius: 50%;
        width: 28px;
        height: 28px;
        background-color: pink;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: ${props => props.theme.fonts.text};
        font-size: 11px;
      }
    }
  }

  .menu-list {
    min-height: 150px;
    text-align: center;
    font-family: ${props => props.theme.fonts.text};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  p {
    font-size: 10px;
  }
  a {
    color: ${props => props.theme.colors.dark};
    display: block;
  }
  .active {
    border-bottom: 2px solid pink;
  }
  .icons {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 10px;
  }
  svg {
    cursor: pointer;
  }
`

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
          copyright
        }
      }
    }
  `)
  const { title, copyright } = data.site.siteMetadata
  const { cartContext } = useContext(CartContext)
  const [cart] = cartContext
  return (
    <StyledSidebar>
      <div className="nav-top">
        <Link to="/">
          <h1>{title}</h1>
        </Link>
        <Link to="/shop/basket" className="cart-section">
          <FaShoppingCart></FaShoppingCart>
          <div className="circle">{cart.length}</div>
        </Link>
      </div>
      <div className="menu-list">
        <Link to="/shop" activeClassName="active">
          All
        </Link>
        <Link to="/shop/candles" activeClassName="active">
          Candle
        </Link>
        <Link to="/shop/diffusers" activeClassName="active">
          Diffusers
        </Link>
        <Link to="/shop/zephyr" activeClassName="active">
          Zepher
        </Link>
      </div>
      <div className="footer">
        <div className="icons">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
        <p>{copyright}</p>
      </div>
    </StyledSidebar>
  )
}

export default Sidebar
