import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//components
import Layout from "../../components/Layout"
//styles
import { PageStyle } from "../../styles/globalStyles"

const StyledContainer = styled.div`
  display: grid;
  height: auto;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px 0px;
  a {
    justify-self: center;
  }
`
const StyledItem = styled.div`
  position: relative;
  height: calc(45vw - 100px);
  width: calc(45vw - 100px);
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

export const query = graphql`
  query ItemQuery {
    items: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "candle" } } }
    ) {
      nodes {
        frontmatter {
          price
          slug
          title
          img
        }
        id
      }
    }
  }
`
const Candles = ({ data }) => {
  const items = data.items.nodes
  return (
    <Layout>
      <PageStyle>
        <StyledContainer>
          {items.map(item => (
            <Link to={"/shop/" + item.frontmatter.slug} key={item.id}>
              <StyledItem>
                <GatsbyImage
                  image={getImage(item.frontmatter.img)}
                  alt={item.frontmatter.title}
                />
                <div className="text-container">
                  <h1>{item.frontmatter.title}</h1>
                  <h5>{item.frontmatter.price}</h5>
                </div>
              </StyledItem>
            </Link>
          ))}
        </StyledContainer>
      </PageStyle>
    </Layout>
  )
}

export default Candles
