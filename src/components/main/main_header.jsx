import React from "react"
import { Link } from "react-router-dom"
import { SocialIcon } from "react-social-icons"
import styles from '../../stylesheets/root.scss'
import {Link as ScrollLink} from "react-scroll"

const Header = props => (
  <div id='nav'>
    <div id='left-nav'>
      <Link to='/'>HOME</Link>
      <ScrollLink activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>ABOUT</ScrollLink>
      <ScrollLink activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500}>PROJECTS</ScrollLink>
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

export default Header