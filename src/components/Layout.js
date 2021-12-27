import React from 'react';
import * as styles from './Layout.module.scss';
import { useStaticQuery, Link, graphql } from 'gatsby';
import { rhythm } from '../utils/typography';
import cx from 'classnames';

export default function Layout({ children, fixed, style }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <div className={cx(styles.layout, { [styles.fixed]: fixed })} style={style}>
      <header className={styles.header} style={{ margin: `${rhythm(1)} 0` }}>
        <h1 style={{ fontSize: rhythm(2) }} className={styles.title}>
          <Link to="/">{site.siteMetadata.title}</Link>
        </h1>
        <nav className={styles.nav}>
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
  );
}
