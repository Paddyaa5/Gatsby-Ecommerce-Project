import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

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
  h1 {
    font-size: 40px;
    color: ${props => props.theme.colors.dark};
  }
  .menu-list {
    min-height: 150px;
    text-align: center;
    font-family: ${props => props.theme.fonts.text};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  p {
    font-size: 10px;
  }
  .active {
    border-bottom: 1px solid ${props => props.theme.colors.dark};
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
      <Link to="/">
        <h1>{title}</h1>
      </Link>
      <div className="menu-list">
        <Link to="/" activeClassName="active">
          All
        </Link>
        <Link to="/shop/candles" activeClassName="active">
          Candle
        </Link>
        {/* <Link to="/shop/diffusers" activeClassName="active">
          Diffusers
        </Link>
        <Link to="/shop/zephyr" activeClassName="active">
          Zepher
        </Link> */}
      </div>
      <p>{copyright}</p>
    </StyledSidebar>
  )
}

export default Sidebar
