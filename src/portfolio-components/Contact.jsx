import React from 'react';
import './Contact.scss';

class Contact extends React.Component {

  render() {
    return <section id="contact" className="contact-container">
      <h1 className="mb-4">Contact</h1>
      <p>{this.props.contact.subtitle}</p>
      <form action="https://formspree.io/info@yuliacech.com" method="POST">
        <div className="form-inline">
          <label htmlFor="inputEmail">Email</label>
          <input className="" id="inputEmail" name="email" placeholder="Your email"
                 required type="email"/>
        </div>
        <div className="form-inline">
          <label htmlFor="inputName">Name</label>
          <input className="" id="inputName" name="name" placeholder="Your name"
                 type="text"/>
        </div>

        <div className="form-row">
          <label htmlFor="inputMessage">Message</label>
          <textarea className="" id="inputMessage" name="message" placeholder="Your message"/>
        </div>
        <button type="submit" className="btn">Send</button>
      </form>
    </section>
  }
}

export default Contact;
