import {GETALLRECIPE} from "./actionTypes";

const getAllRecipeData = (data: any[]) => (
  {
    payload: { data: [...data] },
    type: GETALLRECIPE,
  });

export default getAllRecipeData;
