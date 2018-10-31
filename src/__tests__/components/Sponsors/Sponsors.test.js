import React from "react";
import Sponsors from "../../../components/Sponsors";
import { shallow } from "enzyme";

describe("Sponsors", () => {
  it("renders correctly", () => {
    expect(
      shallow(<Sponsors url="https://www.youtube.com/watch?v=6n3pFFPSlW4" />)
    ).toMatchSnapshot();
  });
});
