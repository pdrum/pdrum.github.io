import React from 'react'
import * as styles from '../styles/blog-list-item.module.css'
import {Button} from "react-bootstrap";
import {Link} from "gatsby";

export default function BlogListItem({frontmatter}) {
  const {title, excerpt, thumbnailUrl, slug, date} = frontmatter
  return <div className={`card text-dark ${styles.postContainer}`}>
    <h3 className="card-header text-center">{title}</h3>
    <div className={styles.imageContainer}>
      <img
          src={thumbnailUrl}
          alt={title}
      />
    </div>
    <div className="card-body">
      <p className="card-text">{excerpt}</p>
      <div>
        <Link to={`/blog/${slug}`}>
          <Button variant="success">Read</Button>
        </Link>
      </div>
    </div>

    <div className="card-footer text-dark">
      Created at: {date.substring(date, date.indexOf('T')) }
    </div>
  </div>
}
