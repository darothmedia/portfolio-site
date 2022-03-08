import React from "react"
import About from "../about/about"

const Splash = props => (
  <div className='wrapper' id='splashwrap'>
    <section className='wrapper' id='titlewrap'>
      <div id='spacer'></div>
      <h1>Adrian Rothschild</h1>
      <h2>web & app development / product / design</h2>
    </section>
      <About />
  </div>
)

export default Splash