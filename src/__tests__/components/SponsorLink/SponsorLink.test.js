import React from "react";
import SponsorLink from "../../../components/SponsorLink";
import { shallow } from "enzyme";

describe("SponsorLink", () => {
  it("renders correctly", () => {
    expect(
      shallow(<SponsorLink url="https://www.youtube.com/watch?v=6n3pFFPSlW4" />)
    ).toMatchSnapshot();
  });
});
