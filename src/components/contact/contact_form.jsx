import React from "react";
import Header from "../main/main_header";

class ContactForm extends React.Component {

  submit(){
    window.location = 'rothmedia.org'
  }

  render(){
    return(
      <>
      <header>
        <Header />
      </header>
      <div className='page-wrapper' id='formwrap'>
        <h2>HOW CAN I HELP?</h2>
        <div id="lowerwrapper">
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeXjPkowWIn-gjxU_U8dcpNVQwKxyUYBFyp9bI-TE48yS8Q2Q/formResponse"
        onSubmit={this.submit}>
          <div id="inputwrap">
            <input type="text" name='entry.358076833' placeholder=" " />
            <label>Your Email</label>
          </div>
          <div id='inputwrap'>
            <textarea name='entry.1738447102' placeholder=" " />
            <label>Message</label>
          </div>
          <button>Submit</button>
          <p>Note: this message will be submitted via Google Forms</p>
        </form>
        </div>
      </div>
      </>
    )
  }
}

export default ContactForm