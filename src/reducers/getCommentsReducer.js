import * as actionTypes from '../actions/actionTypes';

export function getCommentsReducer(state = { success: false }, action){
    switch(action.type){
        case actionTypes.GET_COMMENTS:
            return {
                success: true,
                data: {
                    ...action.payload
                }
            }
        default: 
            return state
    }
}