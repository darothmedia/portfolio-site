import React from "react"
import { AboutShowCase } from "../showcase/showcase"
import Header from "../main/main_header"

const About = props => (
  <div>
    {!props.component ? 
    <header>
      <Header />
      <div id="pagespacer"></div>
    </header> : null}
    <div id='lowerwrapper'>
      {!props.component ? <h2 id='aboutadrian'>ABOUT ADRIAN</h2> : null}
      <section id="img-txt">
        <div id='imgdiv'>
          <img src="https://www.gravatar.com/avatar/c9e419e9130716352aa68a35c275fa39?s=300" alt="Adrian's Gravatar" />
        </div>
        <div id='txtdiv'>
          <p>
            I am an award-winning creative in digital media, focusing on content for kids.
            I am also a Full Stack Software Engineer specializing in React, Redux, Rails, Ruby,
            JavaScript, PostgreSQL, and MongoDB. I design & build compelling content to engage
            fans on new platforms.
            <br />
            <br />
            I have worked on top rated shows & apps for Nickelodeon, MTV, Paramount+,
            and Amazon Kids, produced immersive games available on mobile and voice devices,
            and pitched creative for prototype digital & physical products that span several
            emerging technologies.
            <br />
            <br />
            Throughout my career in media, I have worked with the Children's Media Association,
            a non-profit bringing together the children's media community through
            networking events, mentorship, regional job boards and creative partnerships
            in NYC, LA, and the Bay Area. I served as the National Director of Digital
            Content from 2017-2019, where I directly managed a team of 5 volunteers.
            In 2022 I will be re-joining the board of officers of the Bay Area Chapter as Director of Membership.
            <br />
            <br />
            I am always open to new concepts, fresh inspiration, and good conversation.
            I thrive on creative energy and big ideas.
          </p>
        </div>
      </section>
      <div id="lowerwrapper">
        <AboutShowCase />
      </div>
    </div>
)

export default About