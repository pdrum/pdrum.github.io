import React from 'react'
import * as styles from '../styles/medium.module.css'
import {Button} from "react-bootstrap";

const MEDIUM_CDN = "https://cdn-images-1.medium.com/max/400"
const MEDIUM_URL = "https://medium.com"

export default function MediumPost({
  title, subtitle, readingTime, imageId, createdAt, uniqueSlug
}) {
  return <div className={`card text-dark ${styles.postContainer}`}>
    <h3 className="card-header text-center">{title}</h3>
    <div className={styles.imageContainer}>
      <img
          src={`${MEDIUM_CDN}/${imageId}`}
          alt={title}
      />
    </div>
    <div className="card-body">
      <p className="card-text">{subtitle} ({Math.floor(readingTime)} minutes
        read)
      </p>
      <div>
        <a href={`${MEDIUM_URL}/@pedram.esmaeeli/${uniqueSlug}`}
           className="card-link"
           target="_blank"
        >
          <Button variant="success">Read</Button>
        </a>
      </div>
    </div>

    <div className="card-footer text-dark">
      Created at: {createdAt}
    </div>
  </div>
}
