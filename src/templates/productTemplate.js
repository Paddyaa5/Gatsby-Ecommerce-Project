import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//components
import Layout from "../components/Layout"
//styles
import { ProductPageStyle } from "../styles/globalStyles"
import Button from "../components/Button"

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
              placeholder: BLURRED
              formats: WEBP
              width: 550
              height: 500
              transformOptions: { fit: COVER, cropFocus: CENTER }
            )
          }
        }
      }
    }
  }
`

const ProductTemplate = ({ data }) => {
  const { title, price, img } = data.markdownRemark.frontmatter

  const handleBasket = () => {
    console.log("buy")
  }
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
          <Button text="Add To Cart" onClick={() => handleBasket()} />
        </div>
      </ProductPageStyle>
    </Layout>
  )
}

export default ProductTemplate
