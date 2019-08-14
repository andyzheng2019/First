import React from "react";

import getAllRecipeData from '../redux/actions/actionCreators'
import { connect } from "react-redux";
  
class RecipesContainer extends React.PureComponent{
        
    render(){
        return  <h1>Welcome to recipes, click <a href='/'>here</a> to go back home page</h1>
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

            let data: any[] | never[] = []
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