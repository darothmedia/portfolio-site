import React from "react"
import { SplashShowcase } from "../showcase/showcase"
import About from "../about/about"
import rocket from '../../rocket.png'

const Splash = props => (
  <div className='wrapper' id='splashwrap'>
    <section className='wrapper' id='titlewrap'>
      <div id='spacer'></div>
      <h1>Adrian Rothschild</h1>
      <h2>web & app development / product / design</h2>
    </section>
    <div className="animwrapper">
      <img src={rocket} className="rocket" alt="rocket" />
    </div>
    <About />
  </div>
)

export default Splash