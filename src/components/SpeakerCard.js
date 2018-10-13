import React, { Component } from "react";
import SpeakerCardTextToggle from "./SpeakerCardTextToggle";

class SpeakerCard extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.setState({ learnMoreToggled: false });
  }

  render() {
    {
      return (
        <div
          css={{
            marginLeft: "auto",
            marginRight: "auto",
            paddingBottom: "112px",
            maxWidth: "600px"
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
                src={this.props.image}
                width="100%"
                css={{
                  width: "100%",
                  marginBottom: "-10px",
                  borderTopLeftRadius: "inherit",
                  borderTopRightRadius: "inherit",
                  transition: "1s",
                  filter: this.state.learnMoreToggled
                    ? "blur(5px)"
                    : "blur(0px)",
                  marginBottom: this.state.learnMoreToggled ? "-200px" : "0px"
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
              <h3>{this.props.name}</h3>
              <h2 css={{ fontWeight: 500, paddingTop: "8px" }}>
                {this.props.title}
              </h2>
              <div css={{ textOverflow: "hidden" }}>
                <p
                  css={{
                    paddingTop: "24px",
                    paddingBottom: "36px",
                    textOverflow: "hidden",
                    transition: "1s",
                    marginBottom: this.state.learnMoreToggled
                      ? "0px"
                      : "-200px",
                    lineHeight: "20px"
                  }}
                >
                  {this.props.description}
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
              <SpeakerCardTextToggle
                focused={this.state.learnMoreToggled}
                defaultText={"learn more"}
                focusedText={"show less"}
                onClick={this.onLearnMoreClicked}
              />
            </div>
          </div>
        </div>
      );
    }
  }

  onLearnMoreClicked = () => {
    this.setState({ learnMoreToggled: !this.state.learnMoreToggled });
  };
}

export default SpeakerCard;
