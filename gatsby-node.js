const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);

    actions.createNodeField({
      node,
      name: `slug`,
      value: `/${
        node.frontmatter.categories[node.frontmatter.categories.length - 1]
      }/${fileNode.relativeDirectory}/`.toLowerCase(),
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // const { data } = await graphql(`
  //   query {
  //     allMarkdownRemark {
  //       distinct(field: frontmatter___categories)
  //       edges {
  //         node {
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  //
  // // create category list pages
  // data.allMarkdownRemark.distinct.forEach(category => {
  //   createPage({
  //     path: `/${category.toLowerCase()}`,
  //     component: path.resolve(`src/templates/ProductsList.js`),
  //     context: { category },
  //   })
  // })
  //
  // // create product pages
  // data.allMarkdownRemark.edges.forEach(({ node }) => {
  //   createPage({
  //     path: node.fields.slug,
  //     component: path.resolve(`src/templates/Product.js`),
  //     context: { slug: node.fields.slug },
  //   })
  // })
};
