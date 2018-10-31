import React from "react";

const TestimonialsBlurbCompressed = (props) => {
  return (
    <div
      style={{ textAlign: "center", marginBottom: "10px", marginTop: "30px" }}
    >
      <h1 style={{ marginBottom: "16px" }}>Hacker Testimonials</h1>
      <p style={{ fontSize: "22px", fontWeight: 500 }}>{props.text}</p>
    </div>
  );
};

export default TestimonialsBlurbCompressed;
