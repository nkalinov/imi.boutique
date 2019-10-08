import Img from "gatsby-image"
import React from "react"
import styles from "./Tile.module.css"

export default function Tile({ node }) {
  return (
    <a href={node.fields.slug} className={styles.tile}>
      <h4 className={styles.title}>{node.frontmatter.title}</h4>
      <p className={styles.content}>{node.frontmatter.content.join(", ")}</p>
      {node.frontmatter.images && (
        <Img
          fixed={node.frontmatter.images[0].childImageSharp.fixed}
          alt="Image"
          title={node.frontmatter.title}
          className={styles.image}
        />
      )}
    </a>
  )
}
