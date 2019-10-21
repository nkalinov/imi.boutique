import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Tile from "../components/Tile"

export default ({ data: { allMarkdownRemark } }) => (
  <Layout>
    {allMarkdownRemark.edges.map(({ node }) => (
      <Tile key={node.id} node={node}></Tile>
    ))}
  </Layout>
)

export const query = graphql`
  query($category: [String]) {
    allMarkdownRemark(
      filter: { frontmatter: { categories: { in: $category } } }
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
