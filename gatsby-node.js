const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Product {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            type
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/shop/" + node.frontmatter.type + "/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/productTemplate.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
}
