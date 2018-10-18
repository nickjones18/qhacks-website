import React from "react";
import ScrollSpy from "react-scrollspy";
import colored from "../assets/img/colored.svg";

const Menu = (props) => {
  const { imgCss } = props || { imgCss: {} };
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "auto auto"
      }}
    >
      <img
        css={{
          paddingLeft: "80px",
          paddingTop: "20px",
          paddingBottom: "20px",
          ...imgCss
        }}
        src={colored}
      />
      <div
        align="right"
        css={{
          marginRight: "80px",
          paddingTop: "32px",
          paddingBottom: "32px",
          height: "84px",
          display: "grid",
          transition: "1s",
          marginLeft: "auto",
          "@media(max-width: 820px)": {
            display: "none"
          },
          " li": {
            listStyleType: "none"
          }
        }}
      >
        <ScrollSpy
          css={{
            display: "grid",
            gridColumnGap: "50px",
            gridTemplateColumns:
              "min-content min-content min-content min-content min-content min-content"
          }}
          items={props.breadCrumbs}
          currentClassName="is-current"
        >
          {props.breadCrumbs.map((label) => (
            <li
              key={label}
              css={{
                ":hover": {
                  " a": {
                    color: "#00205b"
                  },
                  ">div": {
                    width: "100%",
                    height: "2px"
                  }
                }
              }}
            >
              <a
                css={{
                  lineHeight: "1.43",
                  textAlign: "center",
                  paddingLeft: "2px",
                  paddingRight: "2px",
                  textTransform: "uppercase"
                }}
                href={`#${label}`}
              >
                {label}
              </a>
              <div
                css={{
                  width: "100%",
                  height: "2px",
                  transition: "0.5s",
                  marginLeft: "auto",
                  marginRight: "auto",
                  backgroundColor: "#00205b",
                  width: "0px"
                }}
              />
            </li>
          ))}
        </ScrollSpy>
      </div>
    </div>
  );
};

export default Menu;
