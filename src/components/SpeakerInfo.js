import React, { Component } from "react";
import TextToggle from "./TextToggle";
import { css } from "glamor";

let animateText;
class SpeakerInfo extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.setState({ learnMore: true });
  }

  render() {
    {
      return (
        <div
          css={{
            marginLeft: "auto",
            marginRight: "auto",
            paddingBottom: "112px"
          }}
        >
          <div
            css={{
              borderRadius: "8px",
              boxShadow: "0 4px 24px 0 rgba(185, 185, 185, 0.5)",
              marginLeft: "13px",
              marginRight: "13px"
            }}
          >
            <div
              css={{
                overflow: "hidden",
                borderTopLeftRadius: "inherit",
                borderTopRightRadius: "inherit"
              }}
            >
              <img
                src={this.props.speaker.image}
                width="100%"
                css={{
                  width: "100%",
                  marginBottom: "-10px",
                  borderTopLeftRadius: "inherit",
                  borderTopRightRadius: "inherit",
                  transition: "1s",
                  filter: this.state.learnMore ? "blur(0px)" : "blur(5px)",
                  marginBottom: this.state.learnMore ? "0px" : "-200px"
                }}
              />
            </div>

            <div
              css={{
                position: "relative",
                backgroundColor: "#f8f8f8",
                padding: "16px 24px 24px 24px",
                lineHeight: "20px",
                overflow: "hidden"
              }}
            >
              <h3>{this.props.speaker.name}</h3>
              <h2 css={{ fontWeight: 500, paddingTop: "8px" }}>
                {this.props.speaker.title}
              </h2>
              <div css={{ textOverflow: "hidden" }}>
                <p
                  css={{
                    paddingTop: "24px",
                    paddingBottom: "36px",
                    textOverflow: "hidden",
                    transition: "1s",
                    marginBottom: this.state.learnMore ? "-200px" : "0px",
                    lineHeight: "20px"
                  }}
                >
                  {this.props.speaker.description}
                </p>
              </div>
            </div>
            <div
              css={{
                paddingLeft: "24px",
                paddingBottom: "24px",
                paddingTop: "36px"
              }}
            >
              <TextToggle
                focused={this.state.learnMore}
                onClick={this.onLearnMoreClicked}
              />
            </div>
          </div>
        </div>
      );
    }
  }

  onLearnMoreClicked = () => {
    if (this.state.learnMore) {
      const animation = css.keyframes("text", {
        "0%": { maxHeight: "40px" },
        "100%": { maxHeight: "1000px" }
      });
      animateText = `${animation} 1s`;
    } else {
      animateText = "";
    }
    this.setState({ learnMore: !this.state.learnMore });
  };
}

export default SpeakerInfo;
