import React, { Component } from "react";

// detta är en "class component"
class Contact extends Component {
  render() {
    const { name, email, phone } = this.props; // denna es6-sak kallas "destructuring"
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
