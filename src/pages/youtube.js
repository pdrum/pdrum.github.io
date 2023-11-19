import React from 'react'
import Layout from "../layout/Layout";
import HtmlHead from "../components/HtmlHead";
import {Card, Col, Container, Row} from "react-bootstrap";
import * as styles from "../styles/youtube.module.css"

export default function medium() {
  return <Layout>
    <div className={`${styles.youtubeContainer} text-center bg-secondary`}>
      <Container>
        <Card>

          <Card.Header className="text-dark">
            <Card.Title>Byte-Sized System Design</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={4}>
                <iframe
                    src="https://www.youtube.com/embed/WjNdFldOoZA"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className={`${styles.youtubePlaylist}`}>
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
              <Col lg={4}>
                <iframe
                    src="https://www.youtube.com/embed/DzT69G9CTNk"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
              </Col>
              <Col lg={4}>
                <iframe
                    src="https://www.youtube.com/embed/Hbu6VmT790w"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
              </Col>
              <Col lg={4}>
                <iframe
                    src="https://www.youtube.com/embed/aEMOABNjMnI"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
              </Col>
              <Col lg={4}>
                <iframe
                    src="https://www.youtube.com/embed/37qY7vQlv8s"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
              </Col>
              <Col lg={4}>
                <iframe
                    src="https://www.youtube.com/embed/jybLhn7t6Ls"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
              </Col>
              <Col lg={4}>
                <iframe
                    src="https://www.youtube.com/embed/fgT7x1W9JVM"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
              </Col>
              <Col lg={4}>
                <iframe
                    src="https://www.youtube.com/embed/XUfXyyqgT_M"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
              </Col>
              <Col lg={4}>
                <iframe
                    src="https://www.youtube.com/embed/T_8eoXonf0c"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
              </Col>
              <Col lg={4}>
                <iframe
                    src="https://www.youtube.com/embed/mpJKpPtFQkc"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
              </Col>
              <Col lg={4}>
                <iframe
                    src="https://www.youtube.com/embed/DTQnk_f4coQ"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
              </Col>
              <Col lg={4}>
                <iframe
                    src="https://www.youtube.com/embed/Hk13eo63ZUU"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
              </Col>
              <Col lg={4}>
                <iframe
                    src="https://www.youtube.com/embed/njmD7gwU7Pg"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
              </Col>
              <Col lg={4}>
                <iframe
                    src="https://www.youtube.com/embed/UmF7l6hyA8I"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>

          <Card.Header className="text-dark">
            <Card.Title>Spring</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={4}>
                <iframe
                    src="https://www.youtube.com/embed/QpwpyHFKYaA"
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
