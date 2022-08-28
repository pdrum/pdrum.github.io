import React from 'react'
import Layout from "../layout/Layout";
import {graphql} from "gatsby";
import BlogListItem from "../components/BlogListItem";
import {Container} from "react-bootstrap";
import HtmlHead from "../components/HtmlHead";

export default function blog({data}) {
  const frontmatters = data.allMarkdownRemark.nodes.map(markdown => markdown.frontmatter)
  console.log('frontmatters', frontmatters)
  return <Layout>
    <Container>
      {frontmatters.map(frontmatter => <BlogListItem frontmatter={frontmatter}/>)}
    </Container>
  </Layout>
}

export const query = graphql`
query AllMarkdownsQuery {
  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      frontmatter {
        date
        thumbnailUrl
        slug
        title
        excerpt
      }
    }
  }
}`

export const Head = () => <HtmlHead/>
