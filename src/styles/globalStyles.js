import styled from "styled-components"

export const PageStyle = styled.section`
  min-height: 100vh;
  margin-left: 220px;
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
    width: 800px;
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
      margin-top: 50px;
    }
    h2 {
      font-size: 40px;
      letter-spacing: 1px;
    }
  }
`
export const StyledButton = styled.button`
  border-radius: 25px;
  border: 3px solid black;
  margin: 20px 0;
  cursor: pointer;
  padding: 15px 30px;
  color: ${props => props.theme.colors.dark};
  font-family: ${props => props.theme.fonts.headers};
  background-color: transparent;
  transition: all 0.5s;
  &:hover {
    background-color: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.light};
  }
`
export const StyledItem = styled.div`
  position: relative;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .text-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.dark};
    h1 {
      margin: 10px 0;
    }
  }
`
