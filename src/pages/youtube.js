import React from 'react'
import Layout from "../layout/Layout";
import HtmlHead from "../components/HtmlHead";
import {Card, Col, Container, Row} from "react-bootstrap";
import * as styles from "../styles/youtube.module.css"

export default function medium() {
  return <Layout>
    <div className={`${styles.youtubeCard} text-center bg-secondary`}>
      <Container>
        <Card>
          <Card.Header className="text-dark">
            <Card.Title>Object Oriented Design with Spring</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={4}>
                <iframe
                    src="https://www.youtube.com/embed/-8cNlJtLyPw"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  </Layout>
}

export const Head = () => <HtmlHead/>
