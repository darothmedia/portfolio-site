import React, { useState } from "react"
import { Link } from "react-router-dom"
import { SocialIcon } from "react-social-icons"
import styles from '../../stylesheets/root.scss'
import {Link as ScrollLink} from "react-scroll"
import {FaBars} from "react-icons/fa"


const Header = props => {
  const [display, setDisplay] = useState(false)
  const handleClick = e => {
    e.preventDefault()
    setDisplay(!display)
  }
  return(
    <div id='nav'>
      {props.main ? 
      <div id='left-nav'>
        <Link to='/'>HOME</Link>
        <ScrollLink activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>ABOUT</ScrollLink>
        <ScrollLink activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500}>PROJECTS</ScrollLink>
        <Link to='/contact'>CONTACT</Link>
        </div> : 
        <div id='left-nav'>
          <Link to='/'>HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to='/contact'>CONTACT</Link>
        </div> }
      <div id='right-nav'>
        <button onClick={(e) => handleClick(e)} id="hamburger">
          <FaBars />
        </button>
        
        {display === true ? 
        <section id="socialiconmenu">
            <SocialIcon url="https://github.com/darothmedia" bgColor={styles.tc} style={{ width: 35, height: 35, margin: 0, marginBottom: 8, marginRight: 8 }} />
            <SocialIcon url="https://www.linkedin.com/in/adrian-rothschild/" bgColor={styles.tc} style={{ width: 35, height: 35, margin: 0, marginBottom: 8, marginRight: 8 }} />
            <SocialIcon url="https://angel.co/u/adrian-rothschild" bgColor={styles.tc} style={{ width: 35, height: 35, margin: 0, marginRight: 20 }} />
        </section> : null}
        <div id="socialicon">
          <SocialIcon url="https://github.com/darothmedia" bgColor={styles.tc} style={{ width: 35, height: 35, margin: 0, marginRight: 8 }} />
        </div>
        <div id="socialicon">
          <SocialIcon url="https://www.linkedin.com/in/adrian-rothschild/" bgColor={styles.tc} style={{ width: 35, height: 35, margin: 0, marginRight: 8 }} />
        </div>
        <div id="socialicon">
          <SocialIcon url="https://angel.co/u/adrian-rothschild" bgColor={styles.tc} style={{ width: 35, height: 35, margin: 0 }} />
        </div>
      </div>
    </div>
  )
}

export default Header