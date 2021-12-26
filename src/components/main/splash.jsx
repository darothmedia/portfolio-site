import React from "react"
import { SplashShowcase } from "../showcase/showcase"

const Splash = props => (
  <div className='wrapper' id='splashwrap'>
    <section className='wrapper' id='titlewrap'>
      <div id='spacer'></div>
      <h1>Adrian Rothschild</h1>
      <h2>web & app development / product / design</h2>
    </section>
    <SplashShowcase />
  </div>
)

export default Splash