import * as actions from "./index";
import * as types from "../constants/ActionTypes";

describe("ActionTypes", () => {
  it("addArticle should create ADD_ARTICLE action", () => {
    const payload = "My article";
    const expectedAction = {
      type: types.ADD_ARTICLE,
      payload: payload
    };
    expect(actions.addArticle(payload)).toEqual(expectedAction);
  });
});
