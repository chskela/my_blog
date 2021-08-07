import React from "react";
import { shallow } from "enzyme";
import MuiTextField from "./MuiTextField";

const setUp = (props) => shallow(<MuiTextField {...props} />);

describe("MuiTextField component", () => {
  it("should render MuiTextField component default props", () => {
    const component = setUp({
      onChange: () => {},
      onBlur: () => {},
    });
    expect(component).toMatchSnapshot();
  });
  it("should render MuiTextField component whis props", () => {
    const component = setUp({
      onChange: () => {},
      onBlur: () => {},
      type: "text",
      value: "test",
      placeholder: "test",
      icon: "test",
      className: "test",
    });
    expect(component).toMatchSnapshot();
  });

  it(" method onChange must be called and the value changed", () => {
    const testState = { value: "" };
    const component = setUp({
      onBlur: () => {},
      onChange: (e) => {
        testState.value = e.value;
      },
      value: testState.value,
    });
    component.find("input").simulate("change", { value: "test" });
    expect(testState.value).toBe("test");
  });
  it("should call onBlur method", () => {
    const mockCallBack = jest.fn();
    const component = setUp({
      onChange: () => {},
      onBlur: mockCallBack,
    });
    component.find("input").simulate("blur");
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});
