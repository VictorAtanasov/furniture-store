import * as actionTypes from '../actions/actionTypes';

export function commentsReducer(state = { success: false }, action){
    switch(action.type){
        case actionTypes.ADD_COMMENT:
            return {
                success: true,
                ...action.payload
            }
        case actionTypes.ADD_LIKE:
            return {
                success: true,
                ...action.payload
            }
        default: 
            return state
    }
}