import React from "react";

const SpeakerCardTextToggle = (props) => {
  const color = props.focused ? "#00205b" : "#c81c2e";
  return (
    <div>
      <p
        css={{
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "default",
          transition: "1s",
          textTransform: "uppercase",
          color
        }}
        onClick={props.onClick}
      >
        {props.focused ? props.focusedText : `${props.defaultText} >>`}
      </p>
    </div>
  );
};

export default SpeakerCardTextToggle;
