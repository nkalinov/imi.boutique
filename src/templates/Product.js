import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"

export default ({ data: { markdownRemark } }) => {
  return (
    <Layout>
      <h1>{markdownRemark.frontmatter.title}</h1>
      {markdownRemark.frontmatter.images &&
        markdownRemark.frontmatter.images.map(({ childImageSharp }) => (
          <Img
            key={childImageSharp.id}
            fluid={childImageSharp.fluid}
            alt="Image"
          />
        ))}
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        content
        images {
          childImageSharp {
            id
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
