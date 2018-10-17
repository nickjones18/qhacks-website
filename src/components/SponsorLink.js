import React from "react";

export default (props) => (
  <a
    href={props.url}
    target="_blank"
    rel="noopener noreferrer"
    data-cy="sponsor-link"
  >
    {props.children}
  </a>
);
