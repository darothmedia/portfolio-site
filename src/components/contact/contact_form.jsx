import React from "react";

class ContactForm extends React.Component {

  submit(){
    window.location = 'rothmedia.org'
  }

  render(){
    return(
      <div className='wrapper' id='formwrap'>
        <h2>How can I help?</h2>
        <div id="ff-compose"></div>
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeXjPkowWIn-gjxU_U8dcpNVQwKxyUYBFyp9bI-TE48yS8Q2Q/formResponse"
        onSubmit={this.submit}>
          <div id="inputwrap">
            <label>Your Email</label>
            <input type="text" name='entry.358076833' />
          </div>
          <div id='inputwrap'>
            <label>Message</label>
            <textarea name='entry.1738447102' />
          </div>
          
          <button>Submit</button>
        </form>
      </div>
    
    )
  }
}

export default ContactForm