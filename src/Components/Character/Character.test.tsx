import React from "react";
import Character from "./Character";
import { shallow } from "enzyme";

const API_URL= 'https://gateway.marvel.com:443/v1/public/characters';

describe("Character", () => {
  test("should render properly", () => {
    const value: any = {
      urls: [{ type: "detail", url: API_URL }],
      comics: {},
      events: {},
      series: {},
      stories: {},
    };
    const wrapper = shallow(<Character data={value} />);
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("li")).toHaveLength(4);
    
    expect(wrapper.find("a").props().href).toBe(API_URL);
  });
  test("Should render when no url present", () => {
    const value: any = {
      urls: [],
      comics: {},
      events: {},
      series: {},
      stories: {},
    };
    const wrapper = shallow(<Character data={value} />);

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("a").props().href).toBeUndefined();
  });
});
