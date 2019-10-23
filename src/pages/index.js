import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import ProductsList from "../components/ProductsList"

export default ({ data: { allMarkdownRemark } }) => (
  <Layout>
    <ProductsList nodes={allMarkdownRemark.edges} />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(limit: 16) {
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
                fluid(maxWidth: 220) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
