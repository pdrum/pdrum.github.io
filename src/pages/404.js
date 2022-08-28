import React from 'react'
import Layout from "../layout/Layout";
import * as styles from "../styles/404.module.css";
import {FaExclamation, FaExclamationCircle, FaFilePdf} from "react-icons/all";

export default function notFound() {
  return <Layout>
    <div className={`${styles.notFoundContainer} text-center text-dark`}>
      <div className="card mb-3 bg-success">
        <h3 className="card-header">404 ERROR</h3>
        <div className={`${styles.iconContainer} bg-dark`}>
          <FaExclamationCircle className="text-success"/>
        </div>
        <div className="card-body">
          <p className="card-text">
            Seems like you entered the wrong page. Use the menu to go to the
            page you want.
          </p>
        </div>
      </div>
    </div>
  </Layout>
}
