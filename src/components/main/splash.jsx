import React from "react"
import About from "../about/about"
import Projects from "../about/projects"
import rocket from '../../rocket-fuel.png'
import {Link, Element} from "react-scroll"
import Header from "./main_header"

const Splash = props => (
  <>
  <header>
      <Header />
  </header>
  <div className='wrapper' id='splashwrap'>
    <section className='wrapper' id='titlewrap'>
      <div id='spacer'></div>
      <div id='title'>
        <h1>{"Adrian Rothschild".toUpperCase()}</h1>
        <h2>web & app development / product / design</h2>
      </div>
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
    <div className="page-wrapper" id="lowerwrapper">
      <Element name="projects" className="element">
        <Projects />
      </Element>
    </div>
  </div>
  </>
)

export default Splash