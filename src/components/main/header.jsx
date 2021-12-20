import React from "react"
import { Link } from "react-router-dom"

const Header = props => (
  <div id='nav'>
    <Link to='/'>home</Link>
    <Link to='/contact'>contact</Link>
  </div>
)

export default Header