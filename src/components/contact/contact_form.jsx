import React from "react";

class ContactForm extends React.Component {

  submit(){
    window.location = 'rothmedia.org'
  }

  render(){
    return(
      <div className='page-wrapper' id='formwrap'>
        <h2>How can I help?</h2>
        <div id="ff-compose"></div>
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
    
    )
  }
}

export default ContactForm