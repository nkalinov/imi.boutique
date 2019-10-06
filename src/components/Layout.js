import React from "react"
import styles from "./Layout.module.css"
import { useStaticQuery, Link, graphql } from "gatsby"

export default ({ children }) => {
  const { allMarkdownRemark, site } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          distinct(field: frontmatter___categories)
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className={styles.layout}>
      <header>
        <h1>
          <Link to="/">{site.siteMetadata.title}</Link>
        </h1>
        <nav>
          {allMarkdownRemark.distinct.map(category => (
            <Link key={category} to={`/${category}`}>
              {category[0].toUpperCase()}
              {category.slice(1)}
            </Link>
          ))}
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      {children}
    </div>
  )
}
