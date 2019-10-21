import React, { useMemo } from "react"
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

  const tree = useMemo(
    () =>
      allMarkdownRemark.distinct.reduce((tree, value) => {
        // 1. Accessories
        // 2. Accessories/Gloves
        // 3. Accessories/Hats
        const categories = value.split("/")

        let parent
        categories.forEach((cat, i) => {
          // root
          if (i === 0) {
            // create new root
            if (!tree[cat]) {
              tree[cat] = {
                name: cat,
                children: [],
              }
            }

            parent = tree[cat]
          } else {
            // push children
            // todo check duplicate
            const newChild = {
              name: cat,
              children: [],
            }
            // add new child
            parent.children.push(newChild)

            // mark as new parent for next iteration
            parent = newChild
          }
        })
        return Object.values(tree).sort((a, b) => a.name.localeCompare(b.name))
      }, {}),
    [allMarkdownRemark]
  )

  console.log(tree)

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1>
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
