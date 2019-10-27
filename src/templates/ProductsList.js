import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ProductsList from "../components/ProductsList"

export default ({ data: { allMarkdownRemark } }) => (
  <Layout>
    <ProductsList nodes={allMarkdownRemark.edges} />
  </Layout>
)

export const query = graphql`
  query($category: [String]) {
    allMarkdownRemark(
      filter: { frontmatter: { categories: { in: $category } } }
      sort: { fields: frontmatter___title }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            images {
              childImageSharp {
                fixed(width: 220) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
