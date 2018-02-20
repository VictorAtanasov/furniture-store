import auth from '../api/auth';
import {REGISTER, REGISTER_SUCCESS} from './actionTypes';

export function registerUser(user){
    return dispatch => {
        auth.register(user)
            .then((res) => {
                if(res.success){
                    console.log(res)
                }
            })
    }
}