import styled from "styled-components"

export const PageStyle = styled.section`
  min-height: 100vh;
  margin-left: 220px;
  padding: 100px 10px;
  width: calc(100vw - 220px);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProductPageStyle = styled.section`
  position: relative;
  height: 100vh;
  margin-left: 220px;
  width: calc(100vw - 220px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 50px;
  .product-info {
    margin-left: 20px;
    width: 400px;
    height: 80%;
    p {
      font-size: 12px;
      margin: 20px 0;
      text-align: justify;
    }
    strong {
      font-size: 14px;
      font-weight: bold;
    }
    h4 {
      margin-top: 80px;
    }
    h2 {
      font-size: 40px;
      letter-spacing: 1px;
    }
  }
`
