// Brad: "This is like the meeting place of all of our components."

import React, { Component } from "react";

// Custom components
import Contact from "./components/Contact";
import Header from "./components/Header";

// Custom css
import "./App.css";

// Denna sak "bundlar" alla komponenter.
class App extends Component {
  render() {
    return (
      // Så att den får css
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-5555" />
        <Contact name="C-O Baumert" email="baumert@protonmail.com" phone="073-146-4457" />
      </div>
    );
  }
}

export default App;
