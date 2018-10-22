import React from "react";
import Header from "../../../components/Header";
import { shallow } from "enzyme";

const menuItems = ["b1", "b2", "b3"];
describe("Header", () => {
  it("renders correctly", () => {
    expect(shallow(<Header menuItems={menuItems} />)).toMatchSnapshot();
  });
});
