import React from "react"
import { AboutShowCase } from "../showcase/showcase"
import Header from "../main/main_header"

const About = props => (
  <div>
    {!props.component ? 
    <header>
      <Header />
      <div id="pagespacer"></div>
    </header> : <div id="pagespacer"></div>}
    <div id='lowerwrapper'>
      {!props.component ? <h2 id='aboutadrian'>About Adrian</h2> : null}
      <section id="img-txt">
        <div id='imgdiv'>
          <img src="https://www.gravatar.com/avatar/c9e419e9130716352aa68a35c275fa39?s=300" alt="Adrian's Gravatar" />
        </div>
        <div id='txtdiv'>
          <p>
            Preschool TV creative turned software engineer.
            What has that leap taught me? That we can always learn new things, no matter how old (or young) we are; that big risks often pay off;
            and that education is the foundation for a happy & fulfilling career.
            <br />
            <br />
            I am a full-stack software developer and award-winning creative in digital media.
            I am skilled in React, Redux, Rails, Ruby, JavaScript, TypeScript, Vue, PostgreSQL, MongoDB, and other frameworks. 
            I have worked on top rated shows & apps for Nickelodeon, MTV, Paramount+,
            and Amazon Kids, produced immersive games available on mobile and voice devices,
            and pitched creative for prototype digital & physical products that span several
            emerging technologies. I design & build compelling content to engage users on new platforms.
            <br />
            <br />
            Throughout my career in media, I have worked with several nonprofits, charities,
            and schools. I currently volunteer with the Children's Media Association,
            a non-profit bringing together the children's media community through
            networking events, mentorship, regional job boards and creative partnerships
            in NYC, LA, and the Bay Area.
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
  </div>
)

export default About