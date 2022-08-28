import React from 'react'
import Layout from "../layout/Layout";
import {graphql} from "gatsby";

export default function medium() {
  return <Layout>
    Blog posts go here
  </Layout>
}

export const query = graphql`
query AllMarkdownsQuery {
  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      frontmatter {
        date
        image
        slug
        title
        excerpt
      }
    }
  }
}`
