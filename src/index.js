// basic stuff som behövs
import React from "react";
import ReactDOM from "react-dom";

// hämtar samlingen av komponenter, kan man säga, från App.js
import App from "./App";

// spottar ut allt till index.html
ReactDOM.render(<App />, document.getElementById("root"));
