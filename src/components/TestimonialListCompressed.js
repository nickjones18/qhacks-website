import React, { Component } from "react";
import Slider from "react-slick";

import TestimonialCard from "./TestimonialCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class TestimonialListCompressed extends Component {
  constructor(props) {
    super(props);
  }

  handleSwipe = (direction) => {
    const increment = direction === "left" ? 1 : -1;
    if (
      this.state.currentIndex + increment >= 0 &&
      this.state.currentIndex + increment < this.props.testimonials.length
    ) {
      this.setState({ currentIndex: this.state.currentIndex + increment });
    }
  };

  componentWillMount() {
    this.setState({ currentIndex: 0 });
  }

  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: false,
      onSwipe: (direction) => {
        this.handleSwipe(direction);
      }
    };

    const list = this.props.testimonials.map((item, i) => (
      <div
        key={`${item.name} ${item.project}`}
        style={{
          maxWidth: "700px",
          margin: "0 auto"
        }}
      >
        <TestimonialCard item={item} index={i} mobile={true} />
      </div>
    ));

    return (
      <div css={{ width: "100%" }}>
        <Slider {...settings}>{list}</Slider>
      </div>
    );
  }
}

export default TestimonialListCompressed;
