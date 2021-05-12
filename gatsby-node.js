const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Product {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/shop/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/productTemplate.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
}
