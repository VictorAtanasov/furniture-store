import * as actionTypes from '../actions/actionTypes';

export function furnitureReducer(state = { success: false }, action){
    switch(action.type){
        case actionTypes.ADD_FURNITURE:
            return {
                success: true,
                ...action.payload
            }
        case actionTypes.GET_ALL_FURNITURE:
            return {
                success: true,
                data: {
                    ...action.payload
                }
            }
        case actionTypes.FURNITURE_DETAILS:
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