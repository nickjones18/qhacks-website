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
            zIndex: "3",
            "@media(min-width:860px)": {
              backgroundColor: this.state.isAtTheTop
                ? "rgba(0,0,0,0)"
                : "#ffffff"
            }
          }}
        >
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
        </div>
      </div>
    );
  }
}

export default Header;
