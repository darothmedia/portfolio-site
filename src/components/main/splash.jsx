import React from "react"
import Showcase from "../showcase/showcase"

const Splash = props => (
  <div className='wrapper' id='splashwrap'>
    <section className='wrapper' id='titlewrap'>
      <div id='spacer'></div>
      <h1>rothschild</h1>
      <h2>media</h2>
    </section>
    <Showcase />
  </div>
)

export default Splash