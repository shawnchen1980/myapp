import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import MyCom from "./MyCom";

it("App contains MyCom", () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(MyCom).length).toEqual(1);
});
