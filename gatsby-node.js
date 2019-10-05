const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `src/products` })
//
//     actions.createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const ProductTemplate = path.resolve(`src/templates/Product.js`)

  return graphql(
    `
      query AllProductsDirectories {
        allDirectory {
          edges {
            node {
              relativePath
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allDirectory.edges.forEach(({ node }) => {
      if (!node.relativePath) {
        return
      }
      actions.createPage({
        // Path for this page — required
        path: `${node.relativePath}`,
        component: ProductTemplate,
        context: {
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    })
  })
}
