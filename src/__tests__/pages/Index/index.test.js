import React from "react";
import IndexPage from "../../../pages/index";
import { shallow } from "enzyme";

describe("IndexPage", () => {
  it("renders correctly", () => {
    expect(shallow(<IndexPage />)).toMatchSnapshot();
  });
});
