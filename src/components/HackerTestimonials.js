import React, { Component } from "react";
import MediaQuery from "react-responsive";

import ContentWrapper from "./ContentWrapper";
import TestimonialList from "./TestimonialList.js";
import TestimonialsBlurb from "./TestimonialsBlurb";
import TestimonialListCompressed from "./TestimonialListCompressed.js";
import TestimonialsBlurbCompressed from "./TestimonialsBlurbCompressed";

import amyLu from "../assets/img/testimonials/amyLu.png";
import benjiChristie from "../assets/img/testimonials/benjiChristie.jpg";
import cooperLeong from "../assets/img/testimonials/cooperLeong.png";

const testimonials = [
  {
    name: "Amy Lu",
    project: "Reeltube",
    image: amyLu,
    text:
      "In high school, I’d never opened a single computer science course brochure, and now I will be an incoming graduate student in machine learning. QHacks gave me a taster of what tech really was - a creative endeavour with technical tools as the paint brush, and societal-level solution pitching as the frame."
  },
  {
    name: "Cooper Leong",
    project: "",
    image: cooperLeong,
    text:
      "Events such as QHacks have allowed me to delve into topics without fear. I used to find it time consuming and intimidating to learn enough to feel confident about a topic, but now I can tackle it head on. It has been just under a year since my first hackathon, and I can say that it has changed my life for the best, and I look forward to participating in many more!"
  },
  {
    name: "Benji Christie",
    project: "",
    image: benjiChristie,
    text:
      "Our entire team had never deployed a project before so we struggled a lot with getting it up and running. We had to google and learn, try and fail, and repeat, which ended up being the most rewarding experience."
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
      <section
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
      </section>
    );
  }
}

export default HackerTestimonials;
