import React from "react";
import renderer from "react-test-renderer";
import MuiButton from "./MuiButton";

test("MuiButton cteated", () => {
  const component = renderer.create(<MuiButton label={"Home"} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
