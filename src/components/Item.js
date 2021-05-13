import React from "react"
import styled from "styled-components"

const StyledItem = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  border: 2px solid grey;
  .image-container {
    width: 150px;
  }
  .item-info-container {
    width: 100%;
  }
  .item-value-container {
    width: 150px;
  }
`

export default function BasketItem() {
  return (
    <StyledItem>
      <div className="image-container">HELLO</div>
      <div className="item-info-container">HI</div>
      <div className="item-value-container">YO</div>
    </StyledItem>
  )
}
