import React from "react"
import { Link } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

const Header = props => (
  <div id='nav'>
    <div id='left-nav'>
      <Link to='/'>home</Link>
      <Link to='/contact'>contact</Link>
    </div>
    <div id='right-nav'>
      <SocialIcon url="https://github.com/darothmedia" bgColor="#FCF1C4" style={{width: 40, height: 40, margin: 0, marginRight: 10}} />
      <SocialIcon url="https://www.linkedin.com/in/adrian-rothschild/" bgColor="#FCF1C4" style={{ width: 40, height: 40, margin: 0, marginRight: 10 }} />
      <SocialIcon url="https://angel.co/u/adrian-rothschild" bgColor="#FCF1C4" style={{ width: 40, height: 40, margin: 0, marginRight: 20 }} />
    </div>
  </div>
  
)

export default Header