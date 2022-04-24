import React from "react";

// detta är en "function component"
const Header = (props) => {
  const { branding } = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
};

export default Header;
