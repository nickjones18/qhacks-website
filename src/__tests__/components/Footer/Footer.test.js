import React from "react";
import Footer from "../../../components/Footer";
import { shallow } from "enzyme";

describe("Footer", () => {
  it("renders correctly", () => {
    expect(shallow(<Footer />)).toMatchSnapshot();
  });
});
