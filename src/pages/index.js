import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ProductsList from '../components/ProductsList';

export default function IndexPage({ data }) {
  return (
    <Layout>
      <ProductsList nodes={data.allFile.nodes} />
    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    allFile(sort: { fields: name }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;
