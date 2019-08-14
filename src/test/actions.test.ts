import getAllRecipeData from "../redux/actions/actionCreators"
import {GETALLRECIPE} from "../redux/actions/actionTypes";

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const expectedAction = {
      payload: { data: [] },
      type: GETALLRECIPE,
    }
    expect(getAllRecipeData([])).toEqual(expectedAction)
  })
})