import React from "react";
import { shallow } from "enzyme";
import MuiArticle from "./MuiArticle";

const setUp = (props) => shallow(<MuiArticle {...props} />);

describe("MuiArticle component", () => {
  const props = {
    post: {
      title: "test_title",
      author: {
        name: "test_name",
        picture: "test_picture",
      },
      date: "test_date",
      excerpt: "test_excerpt",
      category: "test_category",
    },
  };

  it("should render MuiArticle component default props", () => {
    const component = setUp(props);
    expect(component).toMatchSnapshot();
  });
  it("should render MuiArticle component whis props", () => {
    const component = setUp({
      ...props,
      className: {
        wrapper: "test_wrapper",
        content: "test_content",
      },
    });
    expect(component).toMatchSnapshot();
  });
});
