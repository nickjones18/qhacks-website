import React from "react";

const SpeakerCardTextToggle = (props) => {
  const color = props.focused ? "#00205b" : "#c81c2e";
  return (
    <div>
      <button
        css={{
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "default",
          transition: "1s",
          textTransform: "uppercase",
          background: "none",
          border: "none",
          color
        }}
        onClick={props.onClick}
      >
        {props.focused ? props.focusedText : `${props.defaultText} >>`}
      </button>
    </div>
  );
};

export default SpeakerCardTextToggle;
