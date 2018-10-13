import React from "react";
import SpeakerCardTextToggle from "../../../components/SpeakerCardTextToggle";
import { shallow } from "enzyme";

describe("SpeakerCardTextToggle", () => {
  it("renders correctly", () => {
    expect(
      shallow(
        <SpeakerCardTextToggle
          focusedText="focused!"
          defaultText="default!"
          focused={true}
          onClick={() => {}}
        />
      )
    ).toMatchSnapshot();
  });
});
