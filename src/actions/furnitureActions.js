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

export function getAllFurniture(page){
    return dispatch => {
        return furnitureApi.getAllFurnitures(page)
            .then((res) => {
                dispatch({
                    type: actionTypes.GET_ALL_FURNITURE,
                    payload: res
                })
            })
    }
}

export function getFurnitureDetails(id){
    return dispatch => {
        return furnitureApi.furnitureDetails(id)
            .then((res) => {
                dispatch({
                    type: actionTypes.FURNITURE_DETAILS,
                    payload: res
                })
            })
    }
}