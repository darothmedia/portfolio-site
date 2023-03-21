import React from "react"
import {SplashShowcase } from "../showcase/showcase"
import Header from "../main/main_header"

const Projects = props => (
  <div>
    {!props.component ?
      <header>
        <Header />
        <div id="pagespacer"></div>
      </header> : null}
    <div id='lowerwrapper' className={!props.component ? 'page' : 'component'}>
      <h2>{"Code Projects"}</h2>
      <SplashShowcase />
    </div>
  </div>
)

export default Projects