import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const StyledItem = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  border-bottom: 1px solid lightgray;
  border-radius: 2px;
  font-family: ${props => props.theme.fonts.text};
  .image-container {
    width: 150px;
    padding: 5px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .item-info-container {
    padding: 0 20px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .item-value-container {
    width: 150px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5vw;
  }
`

export default function BasketItem({ title, price, image }) {
  return (
    <StyledItem>
      <div className="image-container">
        <GatsbyImage image={getImage(image)} alt={title} />
      </div>
      <div className="item-info-container">{title}</div>
      <div className="item-value-container">
        <p>£{price.toFixed(2)}</p>
      </div>
    </StyledItem>
  )
}
