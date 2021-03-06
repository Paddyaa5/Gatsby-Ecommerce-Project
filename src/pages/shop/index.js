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
  img {
    object-fit: cover;
  }
`

export const query = graphql`
  query MyQuery {
    items: allMarkdownRemark(sort: { fields: frontmatter___type }) {
      nodes {
        frontmatter {
          img {
            childImageSharp {
              gatsbyImageData(
                blurredOptions: { width: 100 }
                formats: [WEBP, AUTO]
                placeholder: BLURRED
                aspectRatio: 1.1
                transformOptions: { cropFocus: CENTER, fit: COVER }
              )
            }
          }
          price
          slug
          title
          type
        }
        id
      }
    }
  }
`
const Shop = ({ data }) => {
  const items = data.items.nodes
  return (
    <Layout>
      <PageStyle>
        <StyledContainer>
          {items.map(item => (
            <Link
              to={
                "/shop/" + item.frontmatter.type + "/" + item.frontmatter.slug
              }
              key={item.id}
            >
              <StyledItem>
                <GatsbyImage
                  image={getImage(item.frontmatter.img)}
                  alt={item.frontmatter.title}
                />
                <div className="text-container">
                  <h1>{item.frontmatter.title}</h1>
                  <h5>??{item.frontmatter.price.toFixed(2)}</h5>
                </div>
              </StyledItem>
            </Link>
          ))}
        </StyledContainer>
      </PageStyle>
    </Layout>
  )
}

export default Shop
