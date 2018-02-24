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

export function searchFurniture(query){
    return dispatch => {
        return furnitureApi.searchFurnitures(query)
            .then((res) => {
                dispatch({
                    type: actionTypes.SEARCH,
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

export function addComment(id, data){
    return dispatch => {
        return furnitureApi.addComment(id, data)
            .then((res) => {
                dispatch({
                    type: actionTypes.ADD_COMMENT,
                    payload: res
                })
            })
    }
}

export function addLike(id){
    return dispatch => {
        return furnitureApi.addLike(id)
            .then((res) => {
                dispatch({
                    type: actionTypes.ADD_LIKE,
                    payload: res
                })
            })
    }
}

export function getComments(id){
    return dispatch => {
        return furnitureApi.getComments(id)
            .then((res) => {
                dispatch({
                    type: actionTypes.GET_COMMENTS,
                    payload: res
                })
            })
    }
}

export function profile(){
    return dispatch => {
        return furnitureApi.profile()
            .then((res) => {
                dispatch({
                    type: actionTypes.PROFILE,
                    payload: res
                })
            })
    }
}

export function deleteFurniture(id){
    return dispatch => {
        return furnitureApi.deleteFurniture(id)
            .then((res) => {
                dispatch({
                    type: actionTypes.PROFILE,
                    payload: res
                })
            })
    }
}