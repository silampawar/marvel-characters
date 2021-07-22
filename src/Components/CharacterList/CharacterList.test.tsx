import React from "react";
import CharacterList from "./CharacterList";
import { shallow } from "enzyme";
import { ICharacter } from "../Character/Character.d";
import {data} from "./../../mockData"
describe("Characterlist tests", () => {
  test("should render Characterlist properly", () => {
    const value: Array<ICharacter> | null = data.results;
    const wrapper = shallow(<CharacterList dataList={value} />);
    expect(wrapper).toMatchSnapshot();

  });
  test("Should render when no data present", () => {
    const value: Array<ICharacter> | null = null;
    const wrapper = shallow(<CharacterList dataList={value} />);

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("img")).toHaveLength(0);
  });
});
