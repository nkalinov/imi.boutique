import React from 'react';
import * as styles from './ProductsList.module.css';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function ProductsList({ nodes }) {
  return (
    <div className={styles.wrapper}>
      {nodes.map(file => (
        <GatsbyImage
          key={file.name}
          image={file.childImageSharp.gatsbyImageData}
          alt={file.name}
          className={styles.img}
        />
      ))}
    </div>
  );
}
