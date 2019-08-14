import React from "react";
import {Container,Row} from "react-bootstrap"

import getAllRecipeData from '../redux/actions/actionCreators'
import { connect } from "react-redux";
import { IRecipeData } from "../CommonType/RecipeData";


type ContainerProps = {
    data: IRecipeData[],
    getAllRecipeData: any,
  }
  
class RecipesContainer extends React.PureComponent<ContainerProps>{

    componentDidMount(){
        this.props.getAllRecipeData()
    }
    
    render(){
        return <h1>Welcome to recipes, click <a href='/'>here</a> to go back home page</h1>
    }

}

const mapStateToProps = (state: { allRecipesReducer: any; }) => {
    return {data: state.allRecipesReducer.data };
  };

  export function fetchDataAndUpdateStore() {
    return (dispatch: (arg0: { type: string; payload: {}; }) => void) => {
        fetch('https://vswd9pwrkg.execute-api.ap-southeast-2.amazonaws.com/default/mockJson')
  .then(response => response.json())
  .then(json => {

            let jsonObj = JSON.parse(json)

            let data = []
            let arr = jsonObj.contents;
            let len = jsonObj.contents.length
            for(let i = 0;i<len;i++){
                let obj: IRecipeData = {
                key: arr[i].contentId,
                title: arr[i].title,    
                small1x: arr[i].imageList.landscape32small1x.url,
                small2x: arr[i].imageList.landscape32small2x.url,
                small3x: arr[i].imageList.landscape32small3x.url,
                medium1x : arr[i].imageList.landscape32medium1x.url,
                medium2x : arr[i].imageList.landscape32medium2x.url,
                medium3x : arr[i].imageList.landscape32medium3x.url,
                mobile1x : arr[i].imageList.landscapemobile1x.url,
                mobile2x : arr[i].imageList.landscapemobile2x.url,
                mobile3x : arr[i].imageList.landscapemobile3x.url,
                desktop1x: arr[i].imageList.landscapewidedesktop1x.url,
                desktop2x: arr[i].imageList.landscapewidedesktop2x.url,
                desktop3x: arr[i].imageList.landscapewidedesktop3x.url,
                };
            data.push(obj)
            }
            dispatch(getAllRecipeData(data))
        })
      };
   }

const mapDispatchToProps = {
    getAllRecipeData: fetchDataAndUpdateStore
  }


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RecipesContainer)