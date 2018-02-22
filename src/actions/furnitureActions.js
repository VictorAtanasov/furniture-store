import furnitureApi from '../api/furniture';
import * as actionTypes from './actionTypes';

export function furnitureStats(){
    return dispatch => {
        return furnitureApi.statistics()
            .then((res) => {
                dispatch({
                    type: actionTypes.GET_STATS,
                    payload: res
                })
            })
    }
}

export function addFurniture(data){
    return dispatch => {
        return furnitureApi.addFurniture(data)
            .then((res) => {
                dispatch({
                    type: actionTypes.ADD_FURNITURE,
                    payload: res
                })
            })
    }
}