import auth from '../api/auth';
import * as actionTypes from './actionTypes';

export function registerUser(user){
    return dispatch => {
        return auth.register(user)
            .then((res) => {
                dispatch({
                    type: actionTypes.REGISTER_SUCCESS,
                    payload: res
                })
            })
            .catch((res) => {
                dispatch({
                    type: actionTypes.REGISTER_FAIL,
                    payload: res
                })
            })
    }
}

export function loginUser(user){
    return dispatch => {
        return auth.login(user)
            .then((res) => {
                if(res.success){
                    localStorage.setItem('authToken', res.token);
                    localStorage.setItem('user', res.user.name)
                    dispatch({
                        type: actionTypes.LOGIN_SUCCESS,
                        payload: res
                    })
                } else {
                    dispatch({
                        type: actionTypes.LOGIN_FAIL,
                        payload: res
                    })
                }
            })
            .catch((res) => {
                dispatch({
                    type: actionTypes.LOGIN_FAIL,
                    payload: res
                })
            })
    }
}

export function logOut(){
    return dispatch => {
        localStorage.clear();
    }
}

export function getUser(){
    return dispatch => {
        let user = localStorage.getItem('user')
        return user
    }
}