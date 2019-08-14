import {GETALLRECIPE} from "../actions/actionTypes";

const initialState: any[] = [];

export default function(state = initialState, action: { type: any; payload: any}) {
    switch (action.type) {
        case GETALLRECIPE: {
            return {...state, data: [...action.payload.data] };
        }
        default:
            return state;

    }
}
