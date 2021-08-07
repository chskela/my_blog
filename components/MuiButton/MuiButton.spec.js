import React from "react";
import { shallow } from "enzyme";
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
  it("should call onClick method", () => {
    const mockCallBack = jest.fn();
    const component = shallow(
      <MuiButton
        label={"Test"}
        type={"submite"}
        className={"test"}
        onClick={mockCallBack}
      />
    );
    component.find(".button").simulate("click");
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});
