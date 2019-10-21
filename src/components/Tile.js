import Img from "gatsby-image"
import React from "react"
import styles from "./Tile.module.css"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

export default function Tile({ node }) {
  return (
    <Link
      to={node.fields.slug}
      className={styles.tile}
      style={{ margin: rhythm(1) }}
    >
      {node.frontmatter.images && (
        <Img
          fixed={node.frontmatter.images[0].childImageSharp.fixed}
          alt="Image"
          title={node.frontmatter.title}
          className={styles.image}
        />
      )}
      <h4 className={styles.title} style={{ marginTop: rhythm(0.1) }}>
        {node.frontmatter.title}
      </h4>
      <span style={scale(-0.5)}>{node.frontmatter.materials.join(", ")}</span>
    </Link>
  )
}
