import React from "react"
import styles from "./Layout.module.css"
import { useStaticQuery, Link, graphql } from "gatsby"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
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
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h1>
        <nav>
          <Link to="/women">Women</Link>
          <Link to="/men">Men</Link>
        </nav>
      </header>
      {children}
    </div>
  )
}
