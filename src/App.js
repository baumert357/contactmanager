import React, { Component } from "react";

// Custom components
import Contacts from "./components/Contacts";
import Header from "./components/Header";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Custom CSS (Sass)
import "./App.scss";

// Denna sak "bundlar" alla komponenter.
class App extends Component {
  render() {
    return (
      <div>
        <Header branding="Contact Manager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;

// Brad: "This is like the meeting place of all of our components."
