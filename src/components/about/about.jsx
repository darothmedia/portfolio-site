import React from "react"
import { AboutShowCase } from "../showcase/showcase"

const About = props => (
  <div className="page-wrapper" id='aboutwrapper'>
    <h2>About Adrian</h2>
    <section id="img-txt">
      <div id='imgdiv'>
        <img src="https://www.gravatar.com/avatar/c9e419e9130716352aa68a35c275fa39?s=300" alt="Adrian's Gravatar" />
      </div>
      <div id='txtdiv'>
        <p>
          I am an award-winning creative in digital media, focusing on entertaining and educational content
          for kids. I am also a Full Stack Software Engineer specializing in React, Redux, Rails, Ruby, JavaScript, PostgreSQL, and MongoDB. I design & build compelling content to engage fans on new platforms.
          <br />
          <br />
          I have worked on top rated shows & apps for Nickelodeon, MTV, Paramount+, and Amazon Kids, produced immersive games available on mobile and voice devices, and pitched creative for prototype digital & physical products that span several emerging technologies.
          <br />
          <br />
          Throughout my career in media, I have worked with the Children's Media Association, 
          a non-profit bringing together the children's media community
          through networking events, mentorship, and regional job boards & creative
          partnerships in NYC, LA, and the Bay Area. I served as the National Director of Digital
          Content from 2017-2019, and will soon join the board of the Bay Area Chapter
          as Director of Membership.
          <br />
          <br />
          I am always open to new concepts, fresh inspiration, and good conversation. I thrive on creative energy and big ideas.
        </p>
      </div>
    </section>
    <AboutShowCase />
  </div>
)

export default About