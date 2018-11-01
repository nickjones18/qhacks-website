import React from "react";

const TestimonialsBlurbCompressed = (props) => {
  return (
    <div
      style={{ textAlign: "center", marginBottom: "10px" }}
    >
      <h1 style={{ marginBottom: "16px" }}>Hacker Testimonials</h1>
      <p css={{
        fontSize: "20px",
        fontWeight: 500,
        "@media(max-width: 600px)": {
          fontSize: "18px"
        }
      }}>
        {props.text}
      </p>
    </div>
  );
};

export default TestimonialsBlurbCompressed;
