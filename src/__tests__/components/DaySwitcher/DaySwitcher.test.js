import React from "react";
import DaySwitcher from "../../../components/DaySwitcher";
import { shallow } from "enzyme";

describe("DaySwitcher", () => {
  it("renders correctly", () => {
    expect(
      shallow(<DaySwitcher days={["2019-02-01", "2019-02-02", "2019-02-03"]} />)
    ).toMatchSnapshot();
  });
});
