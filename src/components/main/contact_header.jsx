import React from "react"
import { Link } from "react-router-dom"
import { SocialIcon } from "react-social-icons"
import styles from '../../stylesheets/root.scss'

const ContactHeader = props => (
  <div id='nav'>
    <div id='left-nav'>
      <Link to='/'>HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/projects">PROJECTS</Link>
      <Link to='/contact'>CONTACT</Link>
    </div>
    <div id='right-nav'>
      <div>
        <SocialIcon url="https://github.com/darothmedia" bgColor={styles.tc} style={{ width: 35, height: 35, margin: 0, marginRight: 8 }} />
      </div>
      <div>
        <SocialIcon url="https://www.linkedin.com/in/adrian-rothschild/" bgColor={styles.tc} style={{ width: 35, height: 35, margin: 0, marginRight: 8 }} />
      </div>
      <div>
        <SocialIcon url="https://angel.co/u/adrian-rothschild" bgColor={styles.tc} style={{ width: 35, height: 35, margin: 0, marginRight: 20 }} />
      </div>
    </div>
  </div>
  
)

export default ContactHeader