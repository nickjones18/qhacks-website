import React, { Component } from "react";

import ContentWrapper from "./ContentWrapper";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";

let prevScrollY = 0;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHeaderVisible: true,
      isMobileMenuVisible: false,
      isLogoVisible: false,
      isAtTheTop: true
    };
  }

  componentDidMount() {
    window.onscroll = () => {
      const isAtTheTop = window.scrollY === 0;
      const isLogoVisible = window.scrollY > 200;
      const isHeaderVisible =
        window.scrollY < prevScrollY || window.scrollY < 100;
      if (
        this.state.isHeaderVisible !== isHeaderVisible ||
        this.state.isLogoVisible !== isLogoVisible ||
        this.state.isAtTheTop !== isAtTheTop
      ) {
        this.setState({ isHeaderVisible, isLogoVisible, isAtTheTop });
      }
      prevScrollY = window.scrollY;
    };
  }

  disableScrolling = (e) => e.preventDefault();

  enableScrolling = () => true;

  onMobileMenuClicked = () => {
    this.setState({ isMobileMenuVisible: !this.state.isMobileMenuVisible });
    document.body.style.overflow = this.state.isMobileMenuVisible
      ? ""
      : "hidden";
  };

  render() {
    // Throws an error during build command
    try {
      document.ontouchmove = this.state.isMobileMenuVisible
        ? this.disableScrolling
        : this.enableScrolling;
    } catch (e) {}

    return (
      <div>
        <div
          css={{
            width: "100vw",
            position: "fixed",
            top: this.state.isHeaderVisible ? "0px" : "-100px",
            transition: "0.5s",
            backgroundColor: "#ffffff",
            opacity: this.state.isMobileMenuVisible ? "1.0" : "0.95",
            zIndex: "5",
            "@media(min-width:860px)": {
              backgroundColor: this.state.isAtTheTop
                ? "rgba(0,0,0,0)"
                : "#ffffff"
            }
          }}
        >
          <ContentWrapper>
            <div
              css={{
                "@media(max-width:860px)": {
                  display: "grid",
                  gridTemplateColumns: "auto auto"
                }
              }}
            >
              <Menu
                menuItems={this.props.menuItems}
                imgCss={this.state.isLogoVisible}
              />
              <MobileMenu
                menuItems={this.props.menuItems}
                isMenuVisible={this.state.isMobileMenuVisible}
                toggleMenu={this.onMobileMenuClicked}
              />
            </div>
          </ContentWrapper>
        </div>
      </div>
    );
  }
}

export default Header;
