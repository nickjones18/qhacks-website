import React from "react";
import hamburger from "../assets/img/hamburger.svg";
import menuClose from "../assets/img/menuClose.svg";
import logo from "../assets/img/whiteLogo.svg";
import word from "../assets/img/whiteWordmark.svg";
import cubes from "../assets/img/mobileMenuCubes.png";

const MobileMenu = (props) => (
  <div
    align="right"
    css={{
      marginLeft: "auto",
      padding: "32px",
      "@media(min-width: 820px)": {
        display: "none"
      }
    }}
  >
    <img
      onClick={props.toggleMenu}
      src={hamburger}
      css={{ width: "32px", height: "24px" }}
    />
    <div
      className={props.isMenuVisible ? "no-scroll" : ""}
      css={{
        display: props.isMenuVisible ? "block" : "none",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        top: "0px",
        left: "0px",
        zIndex: "5",
        background: "#11213f"
      }}
    >
      <img
        align="right"
        css={{ padding: "32px" }}
        src={menuClose}
        onClick={props.toggleMenu}
      />
      <div
        css={{
          marginTop: "100px",
          color: "white",
          display: "grid",
          gridTemplateColumns: "1fr"
        }}
      >
        <div
          css={{
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            " a": {
              color: "white",
              textTransform: "uppercase",
              ":hover": {
                color: "#fedb01"
              }
            }
          }}
        >
          <div>
            <img src={logo} css={{ paddingBottom: "11px" }} />
          </div>
          <div css={{ paddingBottom: "52px" }}>
            <img src={word} width="134px" height="34.8px" />
          </div>
          {props.menuItems.map((i) => (
            <div key={i} css={{ paddingBottom: "24px" }}>
              <a href={`#${i}`} onClick={props.toggleMenu}>
                {i}
              </a>
            </div>
          ))}
          <div>
            <img src={cubes} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MobileMenu;
