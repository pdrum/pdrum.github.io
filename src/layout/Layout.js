import React from "react"
import '../../static/bootstrap.min.css'
import { Col, Container, Row } from "react-bootstrap"
import Sidebar from "../components/Sidebar";
import '../styles/global.css'
import MyNavbar from "../components/MyNavbar";

export default function Layout({ children }) {
  return <Container fluid>
    <Row>
      <Col lg={3}>
        <Sidebar/>
      </Col>
      <Col lg={9} className="bg-secondary">
        <MyNavbar/>
        {children}
      </Col>
    </Row>
  </Container>
}
