import React from "react";

const TextToggle = (props) => {
  const color = props.focused ? "#c81c2e" : "#00205b";
  return (
    <div>
      <p
        css={{
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "default",
          transition: "1s",
          color
        }}
        onClick={props.onClick}
      >
        {props.focused ? "LEARN MORE >>" : "SHOW LESS"}
      </p>
    </div>
  );
};

export default TextToggle;
