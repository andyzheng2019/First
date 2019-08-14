import reducer from "../redux/reducers/allRecipes"
import {GETALLRECIPE} from "../redux/actions/actionTypes";
import {IRecipeData} from "../CommonType/RecipeData"
let obj: IRecipeData = {
key: '121',
title: 'test',    
small1x: 'url1',
small2x: 'url2',
small3x: 'url3',
medium1x : 'arr[i].imageList.landscape32medium1x.url',
medium2x : 'arr[i].imageList.landscape32medium2x.url',
medium3x : 'arr[i].imageList.landscape32medium3x.url',
mobile1x : 'arr[i].imageList.landscapemobile1x.url',
mobile2x : 'arr[i].imageList.landscapemobile2x.url',
mobile3x : 'arr[i].imageList.landscapemobile3x.url',
desktop1x: 'arr[i].imageList.landscapewidedesktop1x.url',
desktop2x: 'arr[i].imageList.landscapewidedesktop2x.url',
desktop3x: 'arr[i].imageList.landscapewidedesktop3x.url',
}
describe('allRecipes reducer', () => {
  it('should return the initial state', () => {
    expect(
        reducer([], 
            {type:GETALLRECIPE,payload:{data:[]}}
            )
        ).toEqual(
      {
        data:[]
      }
    )
  })

  it('should get data ', () => {
    expect(
        reducer([], 
            {type:GETALLRECIPE,payload:{data:[obj]}}
            )
        ).toEqual(
      {
        data:[obj]
      }
    )
  })
})