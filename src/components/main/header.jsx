import React from "react"
import { Link } from "react-router-dom"
import { SocialIcon } from "react-social-icons"
import styles from '../../stylesheets/root.scss'

const Header = props => (
  <div id='nav'>
    <div id='left-nav'>
      <Link to='/'>home</Link>
      <Link to='/about'>about</Link>
      <Link to='/contact'>contact</Link>
    </div>
    <div id='right-nav'>
      <div>
        <SocialIcon url="https://github.com/darothmedia" bgColor={styles.tc} style={{ width: 40, height: 40, margin: 0, marginRight: 10 }} />
      </div>
      <div>
        <SocialIcon url="https://www.linkedin.com/in/adrian-rothschild/" bgColor={styles.tc} style={{ width: 40, height: 40, margin: 0, marginRight: 10 }} />
      </div>
      <div>
        <SocialIcon url="https://angel.co/u/adrian-rothschild" bgColor={styles.tc} style={{ width: 40, height: 40, margin: 0, marginRight: 20 }} />
      </div>
    </div>
  </div>
  
)

export default Header