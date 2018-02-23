import * as actionTypes from '../actions/actionTypes';

export function statsReducer(state = { success: false }, action){
    switch(action.type){
        case actionTypes.GET_STATS:
            return {
                success: true,
                ...action.payload
            }
        default: 
            return state
    }
}