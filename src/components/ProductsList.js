import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./ProductsList.module.css"
import { scale } from "../utils/typography"

export default ({ nodes }) => (
  <div className={styles.wrapper}>
    {nodes.map(({ node }) => (
      <Link key={node.id} to={node.fields.slug} className={styles.tile}>
        {node.frontmatter.images && (
          <Img
            fixed={node.frontmatter.images[0].childImageSharp.fixed}
            alt="Image"
            title={node.frontmatter.title}
          />
        )}
        <h4 className={styles.title} style={{ ...scale(-0.5) }}>
          {node.frontmatter.title}
        </h4>
      </Link>
    ))}
  </div>
)
