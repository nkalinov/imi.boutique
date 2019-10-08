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
      <header className={styles.header}>
        <h1>
          <Link to="/">{site.siteMetadata.title}</Link>
        </h1>
        <nav className={styles.nav}>
          {allMarkdownRemark.distinct.map(category => (
            <Link key={category} to={`/${category}`} className={styles.navLink}>
              {category[0].toUpperCase()}
              {category.slice(1)}
            </Link>
          ))}
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
          <Link to="/contact" className={styles.navLink}>
            Contact
          </Link>
        </nav>
      </header>
      {children}
    </div>
  )
}
