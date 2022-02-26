import React from "react"
import About from "../about/about"
import rocket from '../../rocket.png'
import {Link, animateScroll, Element} from "react-scroll"

const Splash = props => (
  <div className='wrapper' id='splashwrap'>
    <section className='wrapper' id='titlewrap'>
      <div id='spacer'></div>
      <h1>Adrian Rothschild</h1>
      <h2>web & app development / product / design</h2>
    </section>
    <div className="animwrapper">
      <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
        <img src={rocket} className="rocket" alt="rocket" />
      </Link>
    </div>
    <div className="page-wrapper" id="pagewrapper">
      <Element name="about" className="element">
        <About />
      </Element>
    </div>
  </div>
)

export default Splash