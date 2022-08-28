import React from 'react'
import Layout from "../layout/Layout";
import {graphql} from "gatsby";
import BlogListItem from "../components/BlogListItem";

export default function blog({data}) {
  return <Layout>
    <div>
      {
        data.allMarkdownRemark.nodes.forEach(markdown =>
            <BlogListItem
                createdAt={markdown.frontmatter.createdAt}
                title={markdown.frontmatter.title}
                thumbnailUrl={markdown.frontmatter.thumbnailUrl}
                slug={markdown.frontmatter.slug}
                excerpt={markdown.frontmatter.excerpt}
                key={markdown.frontmatter.slug}
            />
        )
      }
    </div>
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
