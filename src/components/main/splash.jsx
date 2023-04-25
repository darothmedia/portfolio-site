import React from "react"
import About from "../about/about"
import Projects from "../about/projects"
import rocket from '../../rocket-fuel.png'
import {Link, Element} from "react-scroll"
import Header from "./main_header"

const Splash = props => {
  function clickHandler(e) {
    e.preventDefault()
    e.target.classList.add('clicked')
    setTimeout(() => {
      e.target.classList.remove('clicked')
    }, 2000)
  }

  return(
    <>
      <header>
        <Header main={true} />
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
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={1000}>
            <div className="rocket-container static-rocket" onClick={e => clickHandler(e)} >
              <img src={rocket} className="rocket" alt="rocket" />
            </div>
          </Link>
        </div>
        <section className="lower-splash">
          <div id="about-section">
            <Element name="about" className="element">
              <About component={true} />
            </Element>
          </div>
          <div id="projects-section">
            <Element name="projects" className="element">
              <div id='pagespacer'></div>
              <Projects component={true} />
            </Element>
          </div>
        </section>
        
      </div>
    </>
  )
  
}

export default Splash