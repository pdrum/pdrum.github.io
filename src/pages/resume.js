import React from 'react'
import Layout from "../layout/Layout";
import * as styles from '../styles/resume.module.css'
import {FaFilePdf} from "react-icons/all";
import HtmlHead from "../components/HtmlHead";
import {Container} from "react-bootstrap";

export default function Resume() {
  return <Layout>
    <Container>
      <div className={`${styles.resumeContainer} text-center text-dark`}>
        <div className="card mb-3 bg-success">
          <h3 className="card-header">Resume</h3>
          <div className={`${styles.iconContainer} bg-dark`}>
            <a href="/cv.pdf" download>
              <FaFilePdf className={styles.icon}/>
            </a>
          </div>
          <div className="card-body">
            <p className="card-text">
              Click on the icon above to download my resume in PDF format
            </p>
          </div>
        </div>
      </div>
    </Container>
  </Layout>
}

export const Head = () => <HtmlHead/>
