import { TransitionGroup, CSSTransition } from "react-transition-group";
import React from "react";

import TestimonialCard from "./TestimonialCard";

const TestimonialList = (props) => {
  const testimonials = props.testimonials.slice(props.currentTestimonial);
  const list = testimonials.map((item, i) => (
    <CSSTransition
      key={`${item.name} ${item.project}`}
      classNames="testimonialsAnimation"
      timeout={500}
    >
      <TestimonialCard item={item} index={i} />
    </CSSTransition>
  ));
  return (
    <div
      css={{
        width: "50%",
        height: "100%",
        position: "absolute",
        top: 0,
        right: 0,
        display: "flex",
        alignItems: "center"
      }}
    >
      <div
        css={{
          display: "flex",
          whiteSpace: "nowrap"
        }}
      >
        <TransitionGroup component={null}>{list}</TransitionGroup>
      </div>
    </div>
  );
};

export default TestimonialList;
