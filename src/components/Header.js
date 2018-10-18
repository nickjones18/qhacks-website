import React, { Component } from "react";
import Menu from "./Menu";

let prevScrollY = 0;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHeaderVisible: false
    };
  }

  componentWillMount() {
    window.onscroll = () => {
      const isHeaderVisible =
        window.scrollY < prevScrollY && window.scrollY > 100;
      if (this.state.isHeaderVisible !== isHeaderVisible) {
        this.setState({ isHeaderVisible });
      }
      prevScrollY = window.scrollY;
    };
  }
  render() {
    return (
      <div
        css={{
          width: "100vw",
          position: "fixed",
          top: this.state.isHeaderVisible ? "0px" : "-100px",
          transition: "0.5s",
          backgroundColor: "#ffffff",
          opacity: "0.8",
          zIndex: "3"
        }}
      >
        <Menu breadCrumbs={this.props.breadCrumbs} />
      </div>
    );
  }
}

export default Header;
