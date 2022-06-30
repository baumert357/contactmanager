import React from "react";
import PropTypes from "prop-types";

// detta är en "function component"
const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="nav navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// fallback om man inte har något värde i <Header branding="Contact Manager" /> från App.js
Header.defaultProps = {
  branding: "Hej lol",
};

// har med types att göra, liksom typescript
Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
