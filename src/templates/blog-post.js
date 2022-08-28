import React from 'react'
import Layout from "../layout/Layout";
import {Card, Container} from "react-bootstrap";
import {graphql} from "gatsby";
import * as styles from '../styles/blog-post.module.css'
import HtmlHead from "../components/HtmlHead";

export default function blogPost({ data }) {
  const { html } = data.markdownRemark
  const { title, thumbnailUrl } = data.markdownRemark.frontmatter
  return <Layout>
    <Container className={`text-dark post-container ${styles.postContainer}`}>
      <Card>
        <Card.Header><Card.Title>{ title }</Card.Title></Card.Header>
        <Card.Img variant="top" src={thumbnailUrl} className={styles.blogBanner} />
        <Card.Body>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Card.Body>
      </Card>
    </Container>
  </Layout>
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        thumbnailUrl
      }
    }
  }
`

export const Head = () => <HtmlHead/>
