import React from "react";

export default (props) => (
  <div
    css={{
      maxWidth: "1400px",
      marginLeft: "auto",
      marginRight: "auto",
      height: "100%"
    }}
  >
    {props.children}
  </div>
);
