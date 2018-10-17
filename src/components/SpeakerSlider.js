import React, { Component } from "react";
import Slider from "react-slick";
import SpeakerCard from "./SpeakerCard";
import SpeakerSliderDots from "./SpeakerSliderDots";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SpeakerSlider extends Component {
  constructor(props) {
    super(props);
  }

  handleSwipe = (direction) => {
    const increment = direction === "left" ? 1 : -1;
    if (
      this.state.currentIndex + increment >= 0 &&
      this.state.currentIndex + increment < this.props.speakers.length
    ) {
      this.setState({ currentIndex: this.state.currentIndex + increment });
    }
  };

  componentWillMount() {
    this.setState({ currentIndex: 0 });
  }

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: false,
      onSwipe: (direction) => {
        this.handleSwipe(direction);
      }
    };

    return (
      <div css={{ width: "100%" }}>
        <SpeakerSliderDots
          speakers={this.props.speakers}
          currentIndex={this.state.currentIndex}
        />
        <Slider {...settings}>
          {this.props.speakers.map((speaker) => (
            <SpeakerCard {...speaker} key={speaker.name} />
          ))}
        </Slider>
      </div>
    );
  }
}

export default SpeakerSlider;
