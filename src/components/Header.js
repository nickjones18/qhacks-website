import React, { Component } from "react";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

let prevScrollY = 0;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHeaderVisible: true,
      isMobileMenuVisible: false,
      isLogoVisible: false
    };
  }

  componentDidMount() {
    window.onscroll = () => {
      const isLogoVisible = window.scrollY > 200;
      const isHeaderVisible =
        window.scrollY < prevScrollY || window.scrollY < 100;
      if (
        this.state.isHeaderVisible !== isHeaderVisible ||
        this.state.isLogoVisible !== isLogoVisible
      ) {
        this.setState({ isHeaderVisible, isLogoVisible });
      }
      prevScrollY = window.scrollY;
    };
  }

  onMobileMenuClicked = () => {
    this.setState({ isMobileMenuVisible: !this.state.isMobileMenuVisible });
  };
  render() {
    return (
      <div>
        <div
          css={{
            width: "100vw",
            position: "fixed",
            top: this.state.isHeaderVisible ? "0px" : "-100px",
            transition: "0.5s",
            backgroundColor: "#ffffff",
            opacity: this.state.isMobileMenuVisible ? "1.0" : "0.8",
            zIndex: "3"
          }}
        >
          <div
            css={{
              "@media(max-width:820px)": {
                display: "grid",
                gridTemplateColumns: "auto auto"
              }
            }}
          >
            <Menu
              breadCrumbs={this.props.breadCrumbs}
              imgCss={this.state.isLogoVisible}
            />
            <MobileMenu
              breadCrumbs={this.props.breadCrumbs}
              isMenuVisible={this.state.isMobileMenuVisible}
              toggleMenu={this.onMobileMenuClicked}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
