import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555",
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "karen@gmail.com",
        phone: "222-222-2222",
      },
      {
        id: 3,
        name: "Henry Johnsson",
        email: "henry@gmail.com",
        phone: "111-111-1111",
      },
    ],
  };

  render() {
    const { contacts } = this.state; // Destructuring

    // .map() is an (high-order) array method found in ES6
    return (
      <React.Fragment>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
