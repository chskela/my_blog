import React from "react";
import { shallow } from "enzyme";
import MuiCardDescription from "./MuiCardDescription";

const setUp = (props) => shallow(<MuiCardDescription {...props} />);

describe("MuiCardDescription component", () => {
  const props = {
    category: "tets",
    title: "test",
    author: { name: "test", picture: "test" },
    excerpt: "test",
  };

  it("should render MuiCardDescription component default props", () => {
    const component = setUp(props);
    expect(component).toMatchSnapshot();
  });
  it("should render MuiCardDescription component whis props", () => {
    const component = setUp({ ...props, date: "test" });
    expect(component).toMatchSnapshot();
  });
});
