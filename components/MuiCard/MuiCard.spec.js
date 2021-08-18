import React from "react";
import { shallow } from "enzyme";
import MuiCard from "./MuiCard";

const setUp = (props) => shallow(<MuiCard {...props} />);

describe("MuiCard component", () => {
  const props = {
    article: {
      category: "test_category",
      title: "test_title",
      author: {
        name: "test_name",
        picture: "test_picture",
      },
      date: "test_date",
      excerpt: "test_excerpt",
      url: "test_url",
      slug: "test_slug",
    },
  };

  it("should render MuiCard component default props", () => {
    const component = setUp(props);
    expect(component).toMatchSnapshot();
  });
  it("should render MuiCard component whis props", () => {
    const component = setUp({ ...props, className: "test" });
    expect(component).toMatchSnapshot();
  });
});
