import React from 'react'
import Layout from "../layout/Layout";
import {graphql} from "gatsby";
import MediumPost from "../components/MediumPost";
import {Container} from "react-bootstrap";
import HtmlHead from "../components/HtmlHead";

export default function medium({data}) {
  return <Layout>
    <Container>
      {data.allMediumPost.edges.map(({node}) =>
          <MediumPost
              title={node.title}
              subtitle={node.virtuals.subtitle}
              readingTime={node.virtuals.readingTime}
              imageId={node.virtuals.previewImage.imageId}
              createdAt={node.createdAt}
              uniqueSlug={node.uniqueSlug}
              key={node.uniqueSlug}
          />
      )}
    </Container>
  </Layout>
}

export const query = graphql`
  query Medium {
    allMediumPost(limit: 7, sort: { fields: createdAt, order: DESC }) {
      totalCount
      edges {
        node {
          id
          uniqueSlug
          title
          createdAt(formatString: "MMM YYYY")
          virtuals {
            subtitle
            readingTime
            previewImage {
              imageId
            }
          }
        }
      }
    }
  }
`

export const Head = () => <HtmlHead/>
