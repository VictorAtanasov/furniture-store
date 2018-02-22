import * as actionTypes from '../actions/actionTypes';

export function furnitureReducer(state = { success: false }, action){
    switch(action.type){
        case actionTypes.GET_STATS:
            return {
                success: true,
                ...action.payload
            }
        case actionTypes.ADD_FURNITURE:
            return {
                success: true,
                ...action.payload
            }
        default: 
            return state
    }
}