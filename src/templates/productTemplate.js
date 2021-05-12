import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//components
import Layout from "../components/Layout"
//styles
import { ProductPageStyle } from "../styles/globalStyles"

export const productQuery = graphql`
  query ProductDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        price
        title
        type
        img {
          childImageSharp {
            gatsbyImageData(
              blurredOptions: { width: 100 }
              formats: WEBP
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`

const ProductTemplate = ({ data }) => {
  const { title, price, img } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <ProductPageStyle>
        <GatsbyImage image={getImage(img)} alt={title} />
        <div>
          <h2>{title}</h2>
          <h4>{price}</h4>
        </div>
      </ProductPageStyle>
    </Layout>
  )
}

export default ProductTemplate
