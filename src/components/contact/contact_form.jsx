import React from "react";

class ContactForm extends React.Component {

  render(){
    return(
      <div className='wrapper' id='formwrap'>
        <h2>How can I help?</h2>
        <form action="">
          <div id="inputwrap">
            <label>Your Email</label>
            <input type="text" />
          </div>
          <div id='inputwrap'>
            <label>Message</label>
            <textarea />
          </div>
          
          <button>Submit</button>
        </form>
      </div>
    
    )
  }
}

export default ContactForm