import React, { Component } from "react";
import TestimonialsBlurb from "./TestimonialsBlurb";
import TestimonialList from "./TestimonialList.js";
import placeholderHeadshot from "../assets/img/placeholderHeadshot.jpg";

const testimonials = [
  {
    name: "Robert Saunders",
    project: "Dolores",
    image: placeholderHeadshot,
    text:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
  },
  {
    name: "Ross Hill",
    project: "Dolores",
    image: placeholderHeadshot,
    text:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
  },
  {
    name: "Joey Tepperman",
    project: "Dolores",
    image: placeholderHeadshot,
    text:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
  }
];

class HackerTestimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTestimonial: 0
    };
  }

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
    return (
      <div
        style={{
          height: "545px",
          width: "100%",
          overflowX: "hidden",
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
        />
        <TestimonialList
          currentTestimonial={this.state.currentTestimonial}
          testimonials={testimonials}
        />
      </div>
    );
  }
}

export default HackerTestimonials;
