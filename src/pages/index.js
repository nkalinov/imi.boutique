import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
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
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            content
            images {
              childImageSharp {
                fixed(width: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
