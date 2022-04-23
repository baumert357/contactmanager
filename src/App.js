// Brad: "This is like the meeting place of all of our components."

import React, { Component } from "react";

// Custom components
import Contact from "./components/Contact";
import Header from "./components/Header";

// Custom css
import "./App.css";

class App extends Component {
  render() {
    return (
      // Så att den får css
      <div className="App">
        <h1>The App Component</h1>
        <Header />
        <Contact />
      </div>
    );
  }
}

export default App;
