import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//components
import Layout from "../components/Layout"
//styles
import { ProductPageStyle } from "../styles/globalStyles"
import AddBasketButton from "../components/AddBasketButton"

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
              formats: [WEBP, AUTO]
              placeholder: BLURRED
              transformOptions: { cropFocus: CENTER, fit: COVER }
            )
          }
        }
      }
    }
  }
`

const ProductTemplate = ({ data }) => {
  const { title, price, img } = data.markdownRemark.frontmatter
  console.log({ title, price, img })
  return (
    <Layout>
      <ProductPageStyle>
        <GatsbyImage image={getImage(img)} alt={title} />
        <div className="product-info">
          <h2>{title}</h2>
          <p>
            <strong>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </strong>
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            tenetur, reprehenderit assumenda fugit beatae illo, aspernatur
            eligendi praesentium ab, eum laboriosam consequuntur minima ipsam
            veritatis labore possimus ex ducimus consectetur!
          </p>
          <h4>{price}</h4>
          <AddBasketButton text="Add To Cart" />
        </div>
      </ProductPageStyle>
    </Layout>
  )
}

export default ProductTemplate
