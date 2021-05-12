import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { FaShoppingCart } from "react-icons/fa"

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
      justify-content: center;
      display: flex;
      svg {
        z-index: 1;
        position: absolute;
        font-size: 34px;
      }
      .circle {
        position: absolute;
        left: 10px;
        top: -12px;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        background-color: pink;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: ${props => props.theme.fonts.text};
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
    border-bottom: 2px solid ${props => props.theme.colors.dark};
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

  return (
    <StyledSidebar>
      <div className="nav-top">
        <Link to="/">
          <h1>{title}</h1>
        </Link>
        <div className="cart-section">
          <FaShoppingCart></FaShoppingCart>
          <div className="circle">0</div>
        </div>
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
      <p>{copyright}</p>
    </StyledSidebar>
  )
}

export default Sidebar
