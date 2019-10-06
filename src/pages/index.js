import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data: { allMarkdownRemark } }) => {
  return (
    <Layout>
      {allMarkdownRemark.edges.map(({ node }) => (
        <a href={node.fields.slug} key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>{node.frontmatter.content.join(", ")}</p>
          {node.frontmatter.images && (
            <Img
              fixed={node.frontmatter.images[0].childImageSharp.fixed}
              alt="Image"
              title={node.frontmatter.title}
            />
          )}
        </a>
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
