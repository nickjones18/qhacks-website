import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import quotes from "../assets/img/quotes.svg";

const AnimatedList = (props) => (
  <div
    style={{
      overflowX: "hidden",
      display: "flex",
      whiteSpace: "nowrap"
    }}
  >
    {props.children}
  </div>
);

class TestimonialList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const testimonials = this.props.testimonials.slice(
      this.props.currentTestimonial
    );
    const list = testimonials.map((item, i) => (
      <div
        key={`${item.name} ${item.project}`}
        style={{
          display: "inline-block",
          height: "375px",
          whiteSpace: "normal",
          borderRadius: "8px",
          boxShadow: "4px 9px 40px 2px rgba(7, 16, 75, 0.1)",
          border: "solid 1px #e8e8e8",
          padding: "48px",
          margin: "45px 23px",
          flex: "0 0 530px",
          backgroundColor: "white",
          zIndex: 2,
          position: "relative",
          opacity: !i ? 1 : 0.6,
          transition: !i ? "opacity 300ms ease 0ms" : "opacity 300ms ease 200ms"
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
            src={item.image}
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
              {item.name}
            </strong>
            <strong>
              <span style={{ color: "#838383" }}>Project:</span> {item.project}
            </strong>
          </div>
        </div>
        <p style={{ lineHeight: "1.6" }}>{item.text}</p>
        <div
          style={{
            textAlign: "right",
            position: "absolute",
            bottom: 24,
            right: 40
          }}
        >
          <img src={quotes} />
        </div>
      </div>
    ));
    return (
      <div
        style={{
          width: "50%",
          height: "100%",
          position: "absolute",
          top: 0,
          right: 0,
          display: "flex",
          alignItems: "center"
        }}
      >
        <ReactCSSTransitionGroup
          component={AnimatedList}
          transitionName="testimonialsAnimation"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {list}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default TestimonialList;
