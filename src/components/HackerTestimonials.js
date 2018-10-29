import React, { Component } from "react";
import MediaQuery from "react-responsive";

import ContentWrapper from "./ContentWrapper";
import TestimonialList from "./TestimonialList.js";
import TestimonialsBlurb from "./TestimonialsBlurb";
import TestimonialListCompressed from "./TestimonialListCompressed.js";
import TestimonialsBlurbCompressed from "./TestimonialsBlurbCompressed";

import placeholderHeadshot from "../assets/img/testimonials/placeholderHeadshot.jpg";

const testimonials = [
  {
    name: "Robert Saunders",
    project: "Dolores",
    image: placeholderHeadshot,
    text:
      "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Cras ullamcorper bibendum bibendum. "
  },
  {
    name: "Ross Hill",
    project: "Dolores",
    image: placeholderHeadshot,
    text:
      "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Cras ullamcorper bibendum bibendum. "
  },
  {
    name: "Joey Tepperman",
    project: "Dolores",
    image: placeholderHeadshot,
    text:
      "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Cras ullamcorper bibendum bibendum. "
  }
];

class HackerTestimonials extends Component {
  state = {
    currentTestimonial: 0
  };

  nextTestimonial() {
    this.setState({
      currentTestimonial: Math.min(
        this.state.currentTestimonial + 1,
        testimonials.length - 1
      )
    });
  }

  prevTestimonial() {
    this.setState({
      currentTestimonial: Math.max(this.state.currentTestimonial - 1, 0)
    });
  }

  render() {
    const blurb = `See what past hackers thought about the event! Lorem ipsum dolor sit amet, consectetur.`;
    return (
      <div
        style={{
          overflowX: "hidden"
        }}
      >
        <ContentWrapper>
          <MediaQuery query="screen and (min-width: 1000px)">
            <div
              id="testimonials"
              style={{
                height: "575px",
                position: "relative"
              }}
            >
              <TestimonialsBlurb
                nextTestimonial={() => this.nextTestimonial()}
                prevTestimonial={() => this.prevTestimonial()}
                firstTestimonial={!this.state.currentTestimonial}
                lastTestimonial={
                  this.state.currentTestimonial === testimonials.length - 1
                }
                text={blurb}
              />
              <TestimonialList
                currentTestimonial={this.state.currentTestimonial}
                testimonials={testimonials}
              />
            </div>
          </MediaQuery>
          <MediaQuery query="screen and (max-width: 1000px)">
            <div style={{ margin: "0 0 80px 0" }}>
              <TestimonialsBlurbCompressed text={blurb} />
              <TestimonialListCompressed
                currentTestimonial={this.state.currentTestimonial}
                testimonials={testimonials}
              />
            </div>
          </MediaQuery>
        </ContentWrapper>
      </div>
    );
  }
}

export default HackerTestimonials;
