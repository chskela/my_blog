import { shallow } from "enzyme";
import React from "react";
import MuiButton from "./MuiButton";

describe("MuiButtom component", () => {
  it("should render MuiButtom component default props", () => {
    const component = shallow(<MuiButton label={"Test"} onClick={() => {}} />);
    expect(component).toMatchSnapshot();
  });
  it("should render MuiButtom component whis props", () => {
    const component = shallow(
      <MuiButton
        label={"Test"}
        type={"submite"}
        className={"test"}
        onClick={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
