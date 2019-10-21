import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"

export default ({ data: { markdownRemark } }) => {
  return (
    <Layout>
      <h4 style={{ textAlign: "center" }}>
        {markdownRemark.frontmatter.title}
      </h4>
      {markdownRemark.frontmatter.images && (
        <div style={{ textAlign: "center", minHeight: 300 }}>
          {markdownRemark.frontmatter.images.map(({ childImageSharp }) => (
            <div
              style={{ maxWidth: 550, width: "100%", display: "inline-block" }}
            >
              <Img key={childImageSharp.id} fluid={childImageSharp.fluid} />
            </div>
          ))}
        </div>
      )}
      <div>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <p></p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        images {
          childImageSharp {
            id
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
