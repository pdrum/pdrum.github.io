import React from 'react'
import {Button} from "react-bootstrap";
import {Link} from "gatsby";
import * as styles from "../styles/my-navbar.module.css"

export default function NavbarItem({linkAddress, text, children}) {
  return <div className={styles.navbarItem}>
    <Link to={ linkAddress }>
      <Button className="btn-success">
        <span style={{ marginRight: '10px' }}>{children}</span>
        { text }
      </Button>
    </Link>
  </div>
}
