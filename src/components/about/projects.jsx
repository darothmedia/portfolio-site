import React from "react"
import { AboutShowCase, SplashShowcase } from "../showcase/showcase"
import Header from "../main/main_header"

const Projects = props => (
  <div>
    {!props.component ?
      <header>
        <Header />
      </header> : null}
    <div id='lowerwrapper'>
      <h2>{"Recent Projects".toUpperCase()}</h2>
      <SplashShowcase />
    </div>
  </div>
)

export default Projects