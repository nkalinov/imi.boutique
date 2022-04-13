import React from 'react';
import * as styles from './ProductsList.module.scss';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function ProductsList({ nodes }) {
  console.log(nodes);

  return (
    <div className={styles.wrapper}>
      {nodes.map(file => (
        <a
          className={styles.item}
          key={file.name}
          href={`mailto:info@imi-teteven.com?subject=Product%20Enquiry%20${file.name}&body=Hello%2C%0D%0A%0D%0AI%20would%20like to ask for more information about this product: https://imi-teteven.com${file.childImageSharp.gatsbyImageData.images.fallback.src} %0D%0A
Best regards,%0D%0A
(First name) (Last name)
        `}
        >
          <GatsbyImage
            image={file.childImageSharp.gatsbyImageData}
            alt={file.name}
            className={styles.img}
          />
          <h3 className={styles.title}>{file.name}</h3>
        </a>
      ))}
    </div>
  );
}
