import React from "react";
import quotes from "../assets/img/quotes.svg";

const TestimonialCard = (props) => (
  <div
    style={{
      display: props.mobile ? "block" : "inline-block",
      height: props.mobile ? null : "375px",
      whiteSpace: "normal",
      width: props.mobile ? null : "530px",
      borderRadius: "8px",
      boxShadow: "4px 7px 20px 2px rgba(7, 16, 75, 0.1)",
      border: "solid 1px #e8e8e8",
      padding: props.mobile ? "24px 24px 82px 24px" : "48px",
      margin: props.mobile ? "45px 20px" : "45px 23px",
      flex: props.mobile ? null : "0 0 530px",
      backgroundColor: "white",
      zIndex: 2,
      position: "relative",
      opacity: props.mobile || !props.index ? 1 : 0.6,
      transition: !props.index
        ? "opacity 300ms ease 0ms"
        : "opacity 300ms ease 200ms"
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "20px"
      }}
    >
      <img
        src={props.item.image}
        style={{ borderRadius: "50%", height: "72px", width: "72px" }}
      />
      <div style={{ display: "inline-block", marginLeft: "24px" }}>
        <strong
          style={{
            marginBottom: "8px",
            fontSize: "20px",
            display: "block"
          }}
        >
          {props.item.name}
        </strong>
        <strong>
          <span style={{ color: "#838383", fontWeight: 600 }}>Project:</span>{" "}
          <span style={{ color: "#00205b", fontWeight: 600 }}>
            {props.item.project}
          </span>
        </strong>
      </div>
    </div>
    <p
      style={{
        lineHeight: "32px",
        fontSize: "15px"
      }}
    >
      {props.item.text}
    </p>
    <img
      src={quotes}
      style={{
        position: "absolute",
        bottom: 24,
        right: 40
      }}
    />
  </div>
);

export default TestimonialCard;
