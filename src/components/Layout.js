import React, { useMemo } from "react"
import styles from "./Layout.module.css"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

export default ({ children, ...props }) => {
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

  const tree = useMemo(() => {
    const tree = allMarkdownRemark.distinct.reduce((tree, value) => {
      let parent

      value.split("/").forEach((category, i) => {
        // root
        if (i === 0) {
          // create new root
          if (!tree[category]) {
            tree[category] = {
              name: category,
              children: [],
            }
          }

          parent = tree[category]
        } else {
          // push children
          // todo check duplicate
          const newChild = {
            name: category,
            children: [],
          }
          // add new child
          parent.children.push(newChild)

          // mark as new parent for next iteration
          parent = newChild
        }
      })

      return tree
    }, {})
    return Object.values(tree).sort((a, b) => a.name.localeCompare(b.name))
  }, [allMarkdownRemark])

  return (
    <div className={styles.layout} {...props}>
      <header className={styles.header} style={{ margin: `${rhythm(1)} 0` }}>
        <h1 style={{ fontSize: rhythm(2) }} className={styles.title}>
          <Link to="/">{site.siteMetadata.title}</Link>
        </h1>
        <nav className={styles.nav}>
          {tree.map(({ name: category, children }) => (
            <Link
              key={category}
              to={`/${category.toLowerCase()}`}
              className={styles.navLink}
            >
              {category}
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
      <div className={styles.children}>{children}</div>
    </div>
  )
}
