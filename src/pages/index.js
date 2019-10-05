import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default ({ data: { allMarkdownRemark } }) => {
  return (
    <Layout>
      {allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h2>{node.frontmatter.title}</h2>
        </div>
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
            category
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
  }
`
