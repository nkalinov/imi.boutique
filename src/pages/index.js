import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Tile from "../components/Tile"

export default ({ data: { allMarkdownRemark } }) => {
  return (
    <Layout>
      {allMarkdownRemark.edges.map(({ node }) => (
        <Tile key={node.id} node={node}></Tile>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(limit: 10) {
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
