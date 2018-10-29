import React from "react";

const SpeakerSliderDots = (props) => (
  <div
    css={{
      marginLeft: "auto",
      marginRight: "auto",
      display: "grid",
      width: props.speakers.length * 20,
      gridTemplateColumns: props.speakers
        .map(() => "1fr ")
        .reduce((a, b) => a + b),
      paddingBottom: "16px",
      ">div": {
        transition: "0.5s",
        borderRadius: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        width: "6px",
        height: "6px"
      }
    }}
  >
    {props.speakers.map((_, i) => (
      <div
        onClick={props.onClick(i)}
        key={i}
        css={{
          backgroundColor: i === props.currentIndex ? "#00205b" : "#aeb7c8"
        }}
      />
    ))}
  </div>
);

export default SpeakerSliderDots;
